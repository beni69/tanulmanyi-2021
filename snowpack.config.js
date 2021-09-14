// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        src: { url: "/" },
    },
    plugins: [["@snowpack/plugin-typescript", { tsc: "tsc" }]],
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
        target: "es2018",
    },
};
