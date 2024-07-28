const webpack = require('webpack');
const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const tsConfigFile = path.join(__dirname, './tsconfig.json');

module.exports = {
  entry: './src/main.ts', // Adjust the entry file accordingly
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    // alias: {
    //   '@nestjs': path.resolve(__dirname, 'node_modules', '@nestjs'),
    // },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigFile,
      }),
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@nestjs/microservices',
          '@nestjs/microservices/microservices-module',
          '@nestjs/websockets/socket-module',
          'class-validator',
          'class-transformer',
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource);
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
  ],

  externals: {
    mariasql: 'mariasql',
    'better-sqlite3': 'better-sqlite3',
    sqlite3: 'sqlite3',
    // 'aws-sdk': 'aws-sdk',
    'mock-aws-s3': 'mock-aws-s3',
    tedious: 'tedious',
    nock: 'nock',
    mssql: 'mssql',
    mysql: 'mysql',
    mysql2: 'mysql2',
    oracle: 'oracle',
    'strong-oracle': 'strong-oracle',
    oracledb: 'oracledb',
    'pg-native': 'pg-native',
    'pg-query-stream': 'pg-query-stream',
  },
};
