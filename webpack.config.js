// module.exports = {
//   entry: './src/main.ts', // Укажите вашу точку входа
//   mode: 'production',
//   target: 'node',
//   resolve: {
//     extensions: ['.js', '.ts'],
//   },
//   externals: [],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js',
//     libraryTarget: 'commonjs2',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: 'ts-loader',
//       },
//     ],
//   },
// };
const lazyImports = [
  '@nestjs/websockets/socket-module',
  '@nestjs/microservices/microservices-module',
];

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['./src/main.ts'],
    externals: [],
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          // Ignoring non-essential modules for Lambda deployment
          return lazyImports.includes(resource);
        },
      }),
    ],
  };
};
