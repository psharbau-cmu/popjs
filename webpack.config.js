module.exports = {
    entry: "./src/pop.js",
    output: {
        path: __dirname + "/out",
        filename: "pop.js"
    },
    module: {
        loaders: [
            //{ test: /\.css$/, loader: "style!css" }
        ]
    }
};