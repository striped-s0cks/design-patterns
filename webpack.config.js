const path = require('path');

module.exports = {
  entry: [
    './src/templatePattern/index.ts',
    './src/facadePattern/index.ts',
    './src/adapterPattern/index.ts',
    './src/commandPattern/index.ts',
    './src/singletonPattern/index.ts',
    './src/factoryPattern/index.ts',
    './src/decoratorPattern/index.ts',
    './src/observerPattern/index.ts',
    './src/strategyPattern/index.ts',
  ],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
