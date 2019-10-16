//This grabs the .env file
require("dotenv").config();
//express is for server, massive is to connect the server to a db
const express = require("express");
const massive = require("massive");
//grab my list controller
const lc = require("./listController");
//Grabbing essential info from the .env
//(i did not use session_secret in this project)
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
//invoking express
const app = express();
//connecting the database
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(express.json());
//endpoints
app.get("/api/list", lc.getList);
//the final step to get your server running is adding a listener
app.listen(SERVER_PORT, () => {
  console.log("Server listening on", { SERVER_PORT });
});
