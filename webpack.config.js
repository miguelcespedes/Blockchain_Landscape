const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.js', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: '[name].[contenthash].js', // Nombre de los archivos generados
    clean: true, // Limpia la carpeta dist antes de generar nuevos archivos
  },
  mode: 'production', // Modo producción para optimizaciones
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Soporte para CSS
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource', // Soporte para imágenes y recursos estáticos
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Dividir automáticamente módulos compartidos
      minSize: 20 * 1024, // Tamaño mínimo para dividir módulos
      maxSize: 200 * 1024, // Tamaño máximo para cada archivo
      automaticNameDelimiter: '-', // Separador de nombres automáticos
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Elimina console.log en producción
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Archivo HTML base
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/images', to: 'images' }, // Copia la carpeta public/images a dist/images
      ],
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ['imagemin-mozjpeg', { quality: 50 }], // Reduce la calidad para JPEG
            ['imagemin-pngquant', { quality: [0.5, 0.7] }], // Reduce la calidad para PNG
          ],
        },
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // Genera un archivo HTML para analizar el tamaño del bundle
      openAnalyzer: false, // No abre el análisis automáticamente
      reportFilename: 'bundle-report.html', // Nombre del reporte
    }),
  ],
};
