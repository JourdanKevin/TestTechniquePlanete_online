const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries/querie');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});




app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get("/getEmploye", db.getEmploye)
app.get("/getTache", db.getTache)
app.post("/postTache", db.postTache)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})