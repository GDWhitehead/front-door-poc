/* eslint-disable import/no-anonymous-default-export */
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { Configuration, ProvidePlugin } from "webpack";
import CopyPlugin from "copy-webpack-plugin";

interface Props {
  env: string;
}
export default ({ env }: Props): Configuration => {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "../build"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              envName: env,
            },
          },
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        // Needed for Okta.
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        process: "process/browser",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            globOptions: {
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
      new ProvidePlugin({
        process: "process/browser",
        React: "react",
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      }),
    ],
  };
};
