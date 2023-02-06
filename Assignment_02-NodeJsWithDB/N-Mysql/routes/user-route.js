const { response } = require("express");
const express = require("express"); //loading express package

const db = require("../db"); //importing database connection

const router = express.Router();

//get users
router.get("/users", (request, response) => {
  //query
  const statement = `select * from user_details;`;
  //get connection
  const connection = db.connect();
  //execute query
  connection.query(statement, (err, user) => {
    //close connection
    connection.end();

    if (err) {
      response.send(err);
    } else {
      response.send(user);
    }
  });
});

//add user
router.post("/adduser", (request, response) => {
  //request body
  const { first_name, last_name, age, contact, email } = request.body;
  //query
  const statement = `insert into user_details (first_name, last_name,age,contact,email) values ('${first_name}','${last_name}' ,'${age}','${contact}','${email}')`;
  //get db connection
  const connection = db.connect();
  //execute query
  connection.query(statement, (err, user) => {
    //close connection
    connection.end();

    if (err) {
      response.send(err);
    } else {
      response.send(user);
    }
  });
});

//update user
router.put("/user/:id", (request, response) => {
  const { id } = request.params;
  const { first_name, last_name, age, contact, email } = request.body;

  const statement = `update user_details set first_name = '${first_name}', last_name = '${last_name}', age=${age}, contact=${contact}, email='${email}' where id=${id};`;

  const connection = db.connect();
  connection.query(statement, (error, result) => {
    connection.end();

    if (error) {
      response.send(error);
    } else {
      response.send(result);
    }
  });
});

router.delete("/user/:id", (request, response) => {
  const { id } = request.params;
  const statement = `delete from user_details where id = ${id}`;
  const connection = db.connect();

  connection.query(statement, (error, result) => {
    connection.end();

    if (error) {
      response.send(error);
    } else {
      response.send(result);
    }
  });
});

module.exports = router;
