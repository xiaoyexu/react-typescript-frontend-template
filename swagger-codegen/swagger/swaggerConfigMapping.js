import path from 'path';

/**
 * swagger file config for each dashboard
 */
const configMapping = {
  sample: {
    yaml: path.resolve(process.cwd(), './src/sample.yaml'),
    dist: './src'
  }
};

export default configMapping;
