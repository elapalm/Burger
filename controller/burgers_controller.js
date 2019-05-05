//Inside the burgers_controller.js file, import the following:
// Run npm for Express
var express = require('express');

//burger.js
var burger = require('../models/burger.js');

// the main route
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };

      res.render('index', hbsObject);
    });
  });
  // the route to burger database
  router.post('/burgers', function(req, res) {
    burger.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });

  //
  router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });

  
  module.exports = router;