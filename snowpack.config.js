// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        src: { url: "/" },
    },
    plugins: [
        ["@snowpack/plugin-typescript", { tsc: "tsc" }],
        ["@snowpack/plugin-postcss"],
    ],
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    optimize: {
        bundle: true,
        minify: true,
        treeshake: true,
        target: "es2018",
        sourcemap: "external",
    },
};
