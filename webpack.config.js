const webpack = require('webpack');
const path = require('path');

module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices',
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
    'class-validator',
    'class-transformer',

    'mariasql',
    'better-sqlite3',
    'sqlite3',
    'mock-aws-s3',
    'tedious',
    'nock',
    'mssql',
    'mysql',
    'mysql2',
    'oracle',
    'strong-oracle',
    'oracledb',
    'pg-native',
    'pg-query-stream',
  ];

  return {
    ...options,
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      clean: true,
      libraryTarget: 'umd',
      globalObject: 'this',
    },
  };
};
