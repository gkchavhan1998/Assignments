const { response } = require("express");
const express = require("express"); //loading express package

const db = require("../db"); //importing database connection

const router = express.Router();

//login user
router.post("/login", (request, response) => {
  const { email } = request.body;
  console.log("REQUEST BODY", request.body);
  const statement = `select * from brownie_points where email='${email}';`;
  const connection = db.connect();
  //execute query
  connection.query(statement, (err, user) => {
    //close connection
    connection.end();
    if (err) {
      response.send(err);
    } else {
      console.log("USER DATA -- ", user);
      response.send(user);
    }
  });
});

//add user
router.post("/adduser", (request, response) => {
  //request body
  console.log("REQUEST : ", request.body);
  const { first_name, last_name, user_type, contact, email } = request.body;
  //query

  const statement = `insert into brownie_points (first_name, last_name,user_type,contact,email) values ('${first_name}','${last_name}' ,'${user_type}','${contact}','${email}')`;
  //get db connection
  const connection = db.connect();
  //execute query
  connection.query(statement, (err, user) => {
    //close connection
    connection.end();
    if (err) {
      response.send(err);
    } else {
      response.send({ data: "added successfully" });
    }
  });
});

//get menu items
router.post("/getmenu", (request, response) => {
  console.log("REQUEST : ", request.body);
  const { email } = request.body;

  const statement_getusertype = `select * from brownie_points where email='${email}';`;
  const connection = db.connect();
  connection.query(statement_getusertype, (err, user) => {
    connection.query(
      `select menu_item from menu_items where user_type="${user[0].user_type}"`,
      (err, user) => {
        connection.end();
        if (err) {
          response.send(err);
        } else {
          console.log("USER DATA -- ", user);
          response.send(user);
        }
      }
    );
  });
});

//get main menu options
router.get("/getmainoption", (request, response) => {
  const statement = "select * from main_menu;";
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
//form management navbar options
router.get("/form_management_options", (request, response) => {
  const statement = "select * from form_options;";
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
//get reward options
router.get("/getrewardoption", (request, response) => {
  const statement = "select * from reward_options;";
  const connection = db.connect();
  //execute query
  console.log("In rewards options");
  connection.query(statement, (err, user) => {
    //close connection
    connection.end();
    if (err) {
      response.send(err);
    } else {
      console.log("REWARDS O/P", user);
      response.send(user);
    }
  });
});

//get setting options
router.get("/getsettingoption", (request, response) => {
  const statement = "select * from setting_options;";
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

//get projact details for chart plotting
router.post("/getprojectdata", (request, response) => {
  //get email if from request---->find person id---> based on id find project details of that person
  console.log("BODY---", request.body);
  const { email } = request.body;
  const getPersonId = `select id from brownie_points where email='${email}';`;

  const connection = db.connect();
  //execute query
  connection.query(getPersonId, (err, user) => {
    console.log("USER: ", user);
    if (err) {
      response.send(err);
    } else {
      const statement = `select project_data.name,project_data.day,project_data.people from project_data inner join emp_project on project_data.id=emp_project.project_id where emp_project.emp_id=${user[0].id};`;
      connection.query(statement, (err, pdata) => {
        //close connection
        connection.end();
        if (err) {
          response.send(err);
        } else {
          response.send(pdata);
        }
      });
    }
  });
});
// //get users
// router.get("/users", (request, response) => {
//   //query
//   const statement = `select * from user_details;`;
//   //get connection
//   const connection = db.connect();
//   //execute query
//   connection.query(statement, (err, user) => {
//     //close connection
//     connection.end();

//     if (err) {
//       response.send(err);
//     } else {
//       response.send(user);
//     }
//   });
// });

// //update user
// router.put("/user/:id", (request, response) => {
//   const { id } = request.params;
//   const { first_name, last_name, age, contact, email } = request.body;

//   const statement = `update user_details set first_name = '${first_name}', last_name = '${last_name}', age=${age}, contact=${contact}, email='${email}' where id=${id};`;

//   const connection = db.connect();
//   connection.query(statement, (error, result) => {
//     connection.end();

//     if (error) {
//       response.send(error);
//     } else {
//       response.send(result);
//     }
//   });
// });

// router.delete("/user/:id", (request, response) => {
//   const { id } = request.params;
//   const statement = `delete from user_details where id = ${id}`;
//   const connection = db.connect();

//   connection.query(statement, (error, result) => {
//     connection.end();

//     if (error) {
//       response.send(error);
//     } else {
//       response.send(result);
//     }
//   });
// });

module.exports = router;
