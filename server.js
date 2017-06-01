var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var webpack = require('webpack');

//ar blog = require('./routes/blog');
//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

// 定义所有的增删改查的借口
//app.use('/', routes);
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