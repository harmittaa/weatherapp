const webpack = require('webpack');

const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    disableHostCheck: true,
    contentBase: 'src/public',
    historyApiFallback: true,
    port: 8000,
    host: '0.0.0.0',
  },
  devtool: 'eval',
  output: {
    filename: 'index.jsx',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2016'] },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/public/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new TransferWebpackPlugin([
      { from: 'src/public' },
    ], '.'),
    new webpack.DefinePlugin({
      'process.env': {
        //ENDPOINT: JSON.stringify(process.env.ENDPOINT || 'http://0.0.0.0:9000/api'),
        ENDPOINT: JSON.stringify(process.env.ENDPOINT || 'http://ec2-34-211-254-23.us-west-2.compute.amazonaws.com:9000/api'),
        //ENDPOINT: JSON.stringify(process.env.ENDPOINT || 'http://192.168.99.100:9000/api'),
      },
    }),
  ],
};
