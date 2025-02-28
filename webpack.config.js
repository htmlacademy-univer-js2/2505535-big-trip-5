const path = require('path'); // Подключаем модуль path для работы с путями
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Подключаем плагин для очистки папки build
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Подключаем плагин для копирования файлов

module.exports = {
  entry: './src/main.js', // Точка входа — файл main.js
  output: {
    filename: 'bundle.js', // Название файла сборки
    path: path.resolve(__dirname, 'build'), // Директория для сборки (абсолютный путь)
  },
  plugins: [
    new CleanWebpackPlugin(), // Очистка папки build перед новой сборкой
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'build' }, // Копируем файлы из public в build
      ],
    }),
  ],
  devtool: 'source-map', // Активируем генерацию source maps
};
