const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // Точка входа
  output: {
    filename: 'bundle.[contenthash].js', // Имя бандла с хэшем
    path: path.resolve(__dirname, 'build'), // Директория для файлов сборки
    clean: true, // Удаляем предыдущую сборку перед созданием новой
  },
  devtool: 'source-map', // Генерируем карту исходного кода
  plugins: [
    // Плагин для генерации HTML
    new HtmlPlugin({
      template: 'public/index.html', // Указываем шаблон HTML
      filename: 'index.html', // Имя выходного файла
      inject: 'body', // Вставляем скрипт перед закрывающим тегом </body>
    }),
    // Плагин для копирования статических файлов
    new CopyPlugin({
      patterns: [
        {
          from: 'public', // Копируем из папки public
          to: '', // Копируем в корень папки сборки
          globOptions: {
            ignore: ['**/index.html'], // Игнорируем index.html
          },
        },
      ],
    }),
  ],
  module: {
    rules: [ // Добавляем лоадеры
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};
