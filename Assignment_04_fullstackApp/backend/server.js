const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/user-route");

app.use(userRoute);

app.listen(4000, () => {
  console.log("server listening on 4000 port no");
});
