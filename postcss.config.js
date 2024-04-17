const withMT = require("@material-tailwind/react/utils/withMT");
const tailwindConfig = require('./tailwind.config.js');

module.exports = withMT({
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
});