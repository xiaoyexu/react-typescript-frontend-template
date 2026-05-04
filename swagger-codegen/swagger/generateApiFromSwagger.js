import * as swaggerTypescriptAPI from 'swagger-typescript-api';
import path from 'path';
import { sync } from 'glob';
import fs from 'fs';
import configMapping from './swaggerConfigMapping.js';

const { generateApi } = swaggerTypescriptAPI;

const args = process.argv.slice(2);
const key = args[0].split('=')[1];

if (configMapping[key]) {
  genSwaggerApi(configMapping[key], key);
}

function genSwaggerApi({ yaml, dist }, moduleName) {
  /* NOTE: all fields are optional expect one of `input`, `url`, `spec` */
  generateApi({
    apiModuleName: moduleName.toUpperCase(),
    // name of output typescript api file (default: "Api.ts")
    name: 'api.ts',
    // set to `false` to prevent the tool from writing to disk
    output: path.resolve(process.cwd(), './swagger-codegen/swagger/temp'),
    // url: 'http://api.com/swagger.json',
    input: path.resolve(process.cwd(), yaml),
    modular: true,
    templates: path.resolve(
      process.cwd(),
      './swagger-codegen/swagger/templates'
    ),
    httpClientType: 'axios', // or "fetch"
    defaultResponseAsSuccess: false,
    generateClient: true,
    generateRouteTypes: false,
    generateResponses: true,
    toJS: false,
    extractRequestParams: false,
    extractRequestBody: true,
    extractEnums: true,
    unwrapResponseData: true,
    defaultResponseType: 'void',
    singleHttpClient: false,
    cleanOutput: true,
    enumNamesAsValues: true,
    moduleNameFirstTag: true,
    generateUnionEnums: true,
    typePrefix: 'I',
    typeSuffix: '',
    enumKeyPrefix: '',
    enumKeySuffix: '',
    addReadonly: false,
    sortTypes: true,
    sortRouters: false,
    extractingOptions: {
      requestBodySuffix: ['Payload', 'Body', 'Input'],
      requestParamsSuffix: ['Params'],
      responseBodySuffix: ['Data', 'Result', 'Output'],
      responseErrorSuffix: [
        'Error',
        'Fail',
        'Fails',
        'ErrorData',
        'HttpError',
        'BadResponse'
      ]
    },
    /** allow to generate extra files based with this extra templates, see more below */
    extraTemplates: [],
    anotherArrayType: false,
    fixInvalidTypeNamePrefix: 'Type',
    fixInvalidEnumKeyPrefix: 'Value',
    codeGenConstructs: (constructs) => ({
      ...constructs,
      RecordType: (key, value) => `MyRecord<key, value>`
    }),
    primitiveTypeConstructs: (constructs) => ({
      ...constructs,
      string: {
        'date-time': 'Date'
      }
    }),
    hooks: {
      onCreateComponent: (component) => {},
      onCreateRequestParams: (rawType) => {},
      onCreateRoute: (routeData) => {},
      onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
      onFormatRouteName: (routeInfo, templateRouteName) => {},
      onFormatTypeName: (typeName, rawTypeName, schemaType) => {},
      onInit: (configuration) => {},
      onPreParseSchema: (originalSchema, typeName, schemaType) => {},
      onParseSchema: (originalSchema, parsedSchema) => {},
      onPrepareConfig: (currentConfiguration) => {}
    }
  })
    .then(({ files, configuration }) => {
      console.log('generate file done');
      // const dist = './packages/common';

      let typeFolder = path.resolve(process.cwd(), `${dist}/api/types/`);
      let modulesFolder = path.resolve(process.cwd(), `${dist}/api/modules/`);
      let typeName = `${dist}/api/types/index.d.ts`;
      let existingFiles = `${dist}/api/modules/*.ts`;

      if (moduleName === 'sales_download') {
        typeFolder = path.resolve(process.cwd(), `${dist}/api/download/types/`);
        modulesFolder = path.resolve(
          process.cwd(),
          `${dist}/api/download/modules/`
        );
        typeName = `${dist}/api/download/types/index.d.ts`;
        existingFiles = `${dist}/api/download/modules/*.ts`;
      }

      if (!fs.existsSync(typeFolder)) {
        fs.mkdirSync(typeFolder);
      }

      if (!fs.existsSync(modulesFolder)) {
        fs.mkdirSync(modulesFolder);
      }

      fs.renameSync(
        path.resolve(
          process.cwd(),
          './swagger-codegen/swagger/temp/data-contracts.ts'
        ),
        path.resolve(process.cwd(), typeName)
      );

      // remove unused file
      fs.unlinkSync(
        path.resolve(
          process.cwd(),
          './swagger-codegen/swagger/temp/http-client.ts'
        )
      );

      // remove existing files
      const existingPackages = sync(existingFiles);
      existingPackages.forEach(function (pkg) {
        fs.unlinkSync(path.resolve(process.cwd(), pkg));
      });

      const packages = sync('./swagger-codegen/swagger/temp/*.ts');
      packages.forEach(function (pkg) {
        const fileName = pkg.replace('swagger-codegen/swagger/temp/', '');
        fs.renameSync(
          path.resolve(process.cwd(), pkg),
          path.join(modulesFolder, fileName)
        );
      });
    })
    .catch((e) => console.error(e));
}
