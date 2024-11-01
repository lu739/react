import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {buildMode} from "./types/config";

export function buildPlugins({paths}: buildMode): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin()
    ]
}