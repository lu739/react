// const path = require("node:path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

const mode = 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    },
    isDev: mode === 'development',
});

export default config;