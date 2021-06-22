
//attributes:
var db = require('../Models/DB_Model');

//methods:
//Add new todo for specific user:
function AddNewTodo(data, callback) {
    db.connection.query('insert into todo (user_id, todo_info) values (?, ?)', [data.user_id, data.todo_info], function (error, results) {
        if (error)
            callback([], error);
        else
            callback(results);
    })
}

//Update an existing todo for specific user:
function UpdateTodo(data, callback) {
    db.connection.query('update todo set todo_info = ? where id = ?', [data.todo_info, data.id], function (error, results) {
        if (error)
            callback([], error);
        else
            callback(results);
    })
}

//Delete an existing todo for specific user:
function DeleteNewTodo(id, callback) {
    db.connection.query('delete from todo where id = ?', [id], function (error, results) {
        if (error)
            callback([], error);
        else
            callback(results);
    })
}

//Get todo information for specific user:
function GetTodo(id, callback) {
    db.connection.query('select * from todo where id = ?', [id], function (error, results) {
        if (error)
            callback([], error);
        else
            callback(results);
    })
}

//module exports :
module.exports = {
    AddNewTodo: AddNewTodo,
    UpdateTodo: UpdateTodo,
    DeleteNewTodo: DeleteNewTodo,
    GetTodo: GetTodo
};
