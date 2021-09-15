const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const postcssFontMagician = require("postcss-font-magician");

module.exports = {
    plugins: [autoprefixer(), postcssPresetEnv(), postcssFontMagician()],
};
