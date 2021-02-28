const express = require("express");
const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "dBaseName",
});



app.listen(3001, ()=>{
    console.log("runing on port 3001");
});
