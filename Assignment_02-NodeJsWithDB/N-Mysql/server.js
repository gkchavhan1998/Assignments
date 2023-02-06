//loading
const express = require("express");
//initialize express
const app = express();
//parse json request
app.use(express.json());

//add route
const userRoute = require("./routes/user-route");

app.use(userRoute);

app.listen(4000, () => {
  console.log("server listening on 4000 port no");
});
