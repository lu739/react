import webpack from "webpack";
import {buildMode} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: buildMode): webpack.Configuration {
    const {mode, paths} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name][contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}