var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const products = require('./routes/products');
const deliverOrder = require('./routes/deliverOrders');
const orderDetails = require('./routes/recieveDetails');
const itemRecieved = require('./routes/itemRecieves');
const location = require('./routes/locations');
const qrcode = require('./routes/qrcodes');
const tagDetail = require('./routes/tagDetails');
const production = require('./routes/productionOrders');
const productionDetails = require('./routes/productionOrderDetails');
const itemIssue = require('./routes/itemIssues');
const uploadImage = require('./routes/uploads')

require('dotenv').config()
const uri = process.env.MONGO_URI

mongoose.Promise = global.Promise;

mongoose.connect(uri)
        .then(()=> console.log('connection mongodb success'))
        .catch(err => console.error('connection mongodb error', err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', products);
app.use('/order', deliverOrder);
app.use('/orderdetail', orderDetails);
app.use('/recieve', itemRecieved);
app.use('/location', location);
app.use('/qrcode', qrcode);
app.use('/tagDetail', tagDetail);
app.use('/production', production);
app.use('/production_details', productionDetails);
app.use('/issue', itemIssue);
app.use('/upload', uploadImage);

app.use('/files',express.static(path.join(__dirname, 'uploads')));

// Serve static files from the "uploads" directory

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
