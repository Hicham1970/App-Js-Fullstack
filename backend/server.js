const express = require("express");
const port = 5000;
const connectBD = require("./config/bd");
const dotenv = require("dotenv").config();

// connection to the Data base:
connectBD();


const app = express();
// Middleware  to parse JSON data from the request body and to decode the url
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// lancer le server
app.listen(port, () => console.log("Server is running on port" + port));
