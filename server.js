// import .env vars
require('dotenv').config();
// connect db (before app)
require('./app/models/connection')

    //create app
var express = require('express'),
    app = express(),
    PORT = process.env.PORT,
    //Webpack
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    //WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    compiler = webpack(config),
    //Middleware
    bodyParser = require('body-parser'),
    //Routes
    apiRoutes = require('./app/backendRoutes/apiRoutes');

//Plug Webpack into Express server
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))
app.use(webpackHotMiddleware(compiler))

//Express Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Routing
app.use('/api', apiRoutes)

// app.get("/*", function(req, res) {
//     //serve main html file
//     res.sendFile(`${__dirname}/app/index.tpl.html`)
// });

app.listen(PORT, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

  console.log(`Listening at localhost:${PORT}`);
});
