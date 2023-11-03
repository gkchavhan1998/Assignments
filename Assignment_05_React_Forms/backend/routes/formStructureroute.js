const express = require("express"); //loading express package

const router = express.Router();

//login user
router.post("/structure", (request, response) => {
  // console.log("REQUEST BODY", request.body);
  let data = request.body;
  console.log("DATA", data);
  response.send(data);
});

module.exports = router;
