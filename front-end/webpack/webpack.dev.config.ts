import fs from "fs";
import { merge } from "webpack-merge";
import {
  HotModuleReplacementPlugin,
  Configuration as WebpackConfiguration,
} from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import baseConfig from "./webpack.base.config";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export default merge<Configuration>(
  baseConfig({
    env: "development",
  }),
  {
    devtool: "inline-source-map",
    devServer: {
      host: "local.keoghs-react-sample.co.uk",
      historyApiFallback: true,
      port: 443,
      https: {
        key: fs.readFileSync(".cert/key.pem"),
        cert: fs.readFileSync(".cert/cert.pem"),
      },
      allowedHosts: "all",
    },
    plugins: [new HotModuleReplacementPlugin()],
  }
);
