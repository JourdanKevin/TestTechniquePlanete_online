const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "testPlanetOnline"
  });
 
con.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

const getEmploye = (request, response) => {  
    con.query("SELECT * FROM employe LEFT JOIN tache on employe.id_tache = tache.id", function (err, result) {
    if (err) throw err;
    response.status(201).send(result)
    });
}

const getTache = (request, response) => {  
    con.query("SELECT * FROM tache", function (err, result) {
    if (err) throw err;
    response.status(201).send(result)
    });
}

const postTache = (request, response) => {  
    console.log(request.body);

    con.query("insert into tache set ?" , request.body, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log("ok")   
      }
    })
  }

module.exports = {
    getEmploye,
    postTache,
    getTache
}