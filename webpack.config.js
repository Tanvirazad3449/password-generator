// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js', // Entry point for your app (adjust path if necessary)
  output: {
    filename: 'bundle.js', // Name of the bundled output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel transpilation to all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Apply CSS files with PostCSS
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Resolves CSS imports
          'postcss-loader', // Processes CSS with PostCSS (Tailwind)
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'], // Resolve JS and CSS files
  },
  devtool: 'source-map', // Optional: To make debugging easier
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    compress: true,
    port: 9000, // Development server port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML file template
    }),
  ],
};
