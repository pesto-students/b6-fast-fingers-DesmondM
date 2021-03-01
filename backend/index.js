const express = require("express");
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "dBaseName",
});

dBaseName.acquireConnection((err)=>{
    if(err){
        throw err;
    }
    console.log('Connecte to database...');
});

//create a table
app.get('/createplayertable', (req, res)=>{
    let sql = 'CREATE TABLE players(id int AUTO_INCREMENT, title VARCHAR(255) PRIMARY KEY (id))';
    dBaseName.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Players table');
    });
});
//insert data
app.get('/addplayer', (req,res)=>{
    let player= {player: 'name', difficulty: 'level'};
    let sql = INSERT INTO players SET ?;
    let query = dBaseName.query(sql, player,(err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Player added...' );
    });
    
});

//select all players

app.get('/getplayers', (req,res)=>{
    
    let sql = 'SELECT * FROM players';
    let query = dBaseName.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Players fetched...');
    });
});

//select a player

app.get('/getplayer/:id', (req,res)=>{
    
    let sql = `SELECT * FROM players WHERE id ${req.params.id}`;
    let query = dBaseName.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Player fetched...');
    });
});


//edit player

app.get('/updateplayer/:id', (req,res)=>{
    let newPlayer = 'Updated Player';
    let sql = `UPDATE players SET player = ${newPlayer} WHERE is = ${req.params.id}`;
    let query = dBaseName.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Player updated...');
    });
});

//delete player

app.get('/deleteplayer/:id', (req,res)=>{
    let newPlayer = 'Delete Player';
    let sql = `DELETE FROM players WHERE id =${req.params.id}`;
    let query = dBaseName.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Player deleted...');
    });
});


app.listen(3001, ()=>{
    console.log("runing on port 3001");
});
