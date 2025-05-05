import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// Получаем рабочую директорию проекта
const resolvePath = (relativePath) =>
  path.resolve(path.dirname(new URL(import.meta.url).pathname), relativePath);

// Новая конфигурация Webpack
export default (env, argv) => ({ // принимаем аргументы env и argv
  entry: ['./src/js/index.js'], // Входной файл
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: resolvePath('dist') // Путь вывода
  },
  devtool: 'source-map', // Source maps для дебага
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolvePath('src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Babel-пресет
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ] // SCSS в CSS
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource', // Используем новый тип asset/resource
        generator: {
          filename: 'assets/[name][ext]', // Генерируем файлы в папку assets
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        type: 'asset/resource', // Аналогично используем новый тип для изображений
        generator: {
          filename: 'assets/[name][ext]', // Тоже генерируем в папку assets
        },
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ // HTML-плагин
      title: 'baseProject',
      template: './src/index.html',
      inject: 'body',
      minify: argv.mode === 'production' ? { // если режим prod, включаем минификацию
        removeComments: true,
        collapseWhitespace: true
      } : {} // иначе никаких опций минификации
    }),
    new MiniCssExtractPlugin({ // Отдельный файл CSS
      filename: 'style.css'
    }),
    new CopyWebpackPlugin({ // Копирование изображений
      patterns: [
        { from: './src/img', to: 'img' },
      ]
    })
  ]
});
    
