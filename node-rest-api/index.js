let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');

// Set up and Connect Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database Terhubung')
}, error => {
  console.log('Database error: ' + error)
})

// Route
const route = require('./routes/route');

// Set Up Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Static Directory Path
app.use(express.static(path.join(__dirname, 'dist/CRUD-Angular-MEAN')));

// Api Root Route
app.use('/api', route);

// PORT for API
const port = process.env.PORT || 8000;

// Set Up Server
app.listen(port, () => {
  console.log('Server berjalan di PORT ' + port)
})

// Base Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/CRUD-Angular-MEAN/index.html'));
});

// Error Handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
