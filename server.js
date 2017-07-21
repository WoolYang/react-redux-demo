var express = require('express'); //引入express
var path = require('path'); //引入根目录
var favicon = require('serve-favicon'); //引入favicon解析
var bodyParser = require('body-parser'); //引入body-parser
var http = require('http'); //引入http模块
var webpack = require('webpack'); //引入webpack
var router = require('./server/router/index') //restful路由索引
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(favicon(path.join(__dirname, 'favicon.ico')));

//生产环境热替换暂时这么写
var config = require('./webpack.production.config')

var compiler = webpack(config)

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	reload: true
}))
app.use(webpackHotMiddleware(compiler));


app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());


//定义资源文件
app.use(express.static(path.join(__dirname, 'dist')));
// 定义所有的增删改查的借口
app.use('/api/getArticleList', router.getArticleList);
app.use('/api/getArticleDetailById', router.getArticleDetailById);
app.use('/api/getArticleListByTag', router.getArticleListByTag);
app.use('/api/getArticleTag', router.getArticleTag);


http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
})

module.exports = app;