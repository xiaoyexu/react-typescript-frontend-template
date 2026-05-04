import swaggerTypescriptAPI from 'swagger-typescript-api';
import path from 'path';

const { generateTemplates } = swaggerTypescriptAPI;

generateTemplates({
  cleanOutput: false,
  output: path.resolve(process.cwd(), './swagger-codegen/swagger/templates'),
  httpClientType: 'axios',
  modular: true,
  silent: false,
  rewrite: true
});
