var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutmeRouter = require('./routes/aboutme');
var myprojectsRouter = require('./routes/myprojects');
var myservicesRouter = require('./routes/myservices');
var templatesRouter = require('./routes/templates');
var portfolioRouter = require('./routes/portfolio');
var smallbusinessRouter = require('./routes/smallbusiness');
var restaurantTemplatesRouter = require('./routes/restaurantTemplates');
var blogRouter = require('./routes/blog');
var vlogRouter = require('./routes/vlog');
var marketingRouter = require('./routes/marketing');
var weddingInvitationRouter = require('./routes/weddingInvitation');
var webpageRouter = require('./routes/webpage');
var comingSoonRouter = require('./routes/comingSoon');
var photoTemplatesRouter = require('./routes/photoTemplates');
var startpageTemplatesRouter = require('./routes/startpageTemplates');
var otherTemplatesRouter = require('./routes/otherTemplates');
var contactmeRouter = require('./routes/contactme');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/aboutme', aboutmeRouter);
app.use('/myprojects', myprojectsRouter);
app.use('/myservices', myservicesRouter);
app.use('/templates', templatesRouter);
app.use('/portfolio', portfolioRouter);
app.use('/smallbusiness', smallbusinessRouter);
app.use('/restaurantTemplates', restaurantTemplatesRouter);
app.use('/blog', blogRouter);
app.use('/vlog', vlogRouter);
app.use('/marketing', marketingRouter);
app.use('/weddingInvitation', weddingInvitationRouter);
app.use('/webpage', webpageRouter);
app.use('/comingSoon', comingSoonRouter);
app.use('/photoTemplates', photoTemplatesRouter);
app.use('/startpageTemplates', startpageTemplatesRouter);
app.use('/otherTemplates', otherTemplatesRouter);
app.use('/contactme', contactmeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
