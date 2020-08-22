const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: './src/index.js', // местоположение точки входа
    output: { // во что будем собирать
     filename: 'bundle.js', // название выходного файла, который содержит весь наш код
     path: path.resolve(__dirname, 'dist') // путь, куда складываем собранный проект
        // __dirname - путь текущей директории, dist - папка
 },
    devServer: {
        port: 3000
    },
    plugins: [
        // добавляем массив плагинов
        new HTMLWebpackPlugin({
            template: './src/index.html' // шаблон, из которого будет построен html-файл
            // сюда автоматически будут добавляться скрипты
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
        ],
    },
}