//Подключение модуля path
const path = require("path");

module.exports = {
  //Режим сборки
  mode: "production",
  //Точка входа
  entry: "./src/index.ts",
  //Настройка выходных данных
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true, //Удаляет предыдущие файлы из выходной директории перед новой сборкой
  },
  //Разрешение модулей
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  //Внешние зависимости
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
