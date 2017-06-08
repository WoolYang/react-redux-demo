var express = require('express');          //引入express
var path = require('path');                //引入根目录
var favicon = require('serve-favicon');  //引入favicon解析
var bodyParser = require('body-parser');  //引入body-parser
var http = require('http');     //引入http模块
var webpack = require('webpack');  //引入webpack
var router = require('./server/router/index')  //restful路由索引
var app = express();

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'favicon.ico')));
//var logger = require('morgan');
//app.use(logger('dev'));
//
//生产环境热替换暂时这么写
var config = require('./webpack.production.config')

var compiler = webpack(config)

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware  = require('webpack-hot-middleware');
app.use(webpackDevMiddleware(compiler, {
   noInfo: true, 
   publicPath: config.output.publicPath,  
   reload: true
}))
app.use(webpackHotMiddleware(compiler));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//定义资源文件
app.use(express.static(path.join(__dirname, 'dist')));

// 定义所有的增删改查的借口
app.use('/api/articleList', router.articleList);
//app.get('/blog', blog.list);
//app.get('/blog/:id', blog.get);  
// app.delete('/comments/:id', blog.delete);
//app.get('/comment/:id', blog.commentList);
//app.post('/comment/:id', blog.commentAdd, blog.commentList);  
//app.post('/blog', blog.add);    
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
})

module.exports = app;