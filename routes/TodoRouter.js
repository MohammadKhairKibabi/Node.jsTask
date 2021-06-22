
//attributes:
var express = require('express');
var router = express.Router();
var cors = require('cors');
var todoModel = require('../Models/TodoModel');

//API access control:
router.use(cors());
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes:
//test API:
router.get('/todo', function(req, res) {
  res.send({data: [], message: "Hello Express.js Restful API"});
});

//Add new todo for specific user:
router.post('/todo', function(req, res) {
  var data = req.body;
  todoModel.AddNewTodo(data, function (result, error) {
    if (error)
      res.send({data: [], message: error});
    else
      res.send({data: result, message: 'todo has added successfully'})
  })
});

//Update an existing todo for specific user:
router.put('/todo', function(req, res) {
  var data = req.body;
  todoModel.UpdateTodo(data, function (result, error) {
    if (error)
      res.send({data: [], message: error});
    else
      res.send({data: result, message: 'todo has updated successfully'})
  })
});

//Delete an existing todo for specific user:
router.delete('/todo/:id', function(req, res) {
  var id = req.params.id;
  todoModel.DeleteNewTodo(id, function (result, error) {
    if (error)
      res.send({data: [], message: error});
    else
      res.send({data: result, message: 'todo has deleted successfully'})
  })
});

//Get todo information for specific user:
router.get('/todo/:id', function(req, res) {
  var id = req.params.id;
  todoModel.GetTodo(id, function (result, error) {
    if (error)
      res.send({data: [], message: error});
    else
      res.send({data: result, message: 'todo has returned successfully'})
  })
});

//Get all todo for specific user:
router.get('/todoUser/:user_id', function(req, res) {
  var user_id = req.params.user_id;
  todoModel.GetUserTodo(user_id, function (result, error) {
    if (error)
      res.send({data: [], message: error});
    else
      res.send({data: result, message: 'todo user has returned successfully'})
  })
});

module.exports = router;
