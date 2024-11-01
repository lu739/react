
export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string,
    build: string,
    html: string
}
export interface buildMode {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean
}