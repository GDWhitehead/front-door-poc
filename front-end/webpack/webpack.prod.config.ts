import { merge } from "webpack-merge";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import baseConfig from "./webpack.base.config";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export default merge<Configuration>(
  baseConfig({
    env: "production",
  }),
  {
    plugins: [new CleanWebpackPlugin()],
  }
);
