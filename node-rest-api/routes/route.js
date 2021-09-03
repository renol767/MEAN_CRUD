const express = require('express');
const app = express();

const route = express.Router();
let Data = require('../models/model');

// Add Data
route.route('/add-data').post((req, res, next) => {
  Data.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Data
route.route('/').get((req, res) => {
  Data.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get 1 Data
route.route('/read-data/:id').get((req, res) => {
  Data.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Update Data
route.route('/update-data/:id').put((req, res, next) => {
  Data.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error)
    } else {
      res.json(data)
      console.log('Data berhasil di Update')
    }
  })
});

// Delete Data
route.route('/delete-data/:id').delete((req, res, next) => {
  Data.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Exports Module
module.exports = route;
