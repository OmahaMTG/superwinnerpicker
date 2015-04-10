module.exports = {
    entry: "./src/kong/main.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        filename: "kong.js"
    }
};