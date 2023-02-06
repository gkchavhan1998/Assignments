const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/usersdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error :  ", err);
  });

app.use(express.json());
const userRouter = require("./routers/users");
app.use("/users", userRouter);

app.listen(4000, () => {
  console.log("server started");
});
