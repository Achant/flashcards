const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();
/*const sandbox = '';
const firstName = 'First Name';
const lastName = 'Last Name';
const colors = [
  'red',
  'orange',
  'blue',
  'black'
];*/

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine','pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

/*app.use((req, res, next) => {
  req.message = "This message made it!";
  const err = new Error('Oh NO!');
  err.status = 500;
  next(err);
});

  console.log('Two');
  next();
});
app.use((req, res, next) => {
  console.log(req.message, 'Good Job');
  next();
});*/


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

  app.listen(3000, () => {
    console.log('the application is running on localhost: 3000')
  });