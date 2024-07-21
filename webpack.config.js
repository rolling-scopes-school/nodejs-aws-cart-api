const TerserPlugin = require('terser-webpack-plugin');

module.exports = function (options, webpack) {
  const lazyImports = [
    '@nestjs/websockets/socket-module',
    '@nestjs/microservices/microservices-module',
  ];

  return {
    ...options,
    entry: ['./src/lambda.ts'],
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

    optimization: {
      minimize: true, // Enable minification
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
            keep_fnames: true,
          },
        }),
      ],
    },
  };
};
