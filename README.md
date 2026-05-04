# react-typescript-frontend-template

Node version v25.8.1

NPM version 11.11.0

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

# Swagger Codegen

Update npm task for module name in package.json, change module name

`"swaggerApi": "node ./swagger-codegen/swagger/generateApiFromSwagger.js --module=${Your module name:sample}"`

Update `swagger-codegen/swaggerConfigMapping.js` file for module name and yaml file name

```
const configMapping = {
  ${Your module name:sample}: {
    yaml: path.resolve(process.cwd(), './src/${Your yaml filename:sample.yaml}'),
    dist: './src'
  }
};
```
