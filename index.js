const express = require('express')
const mysql = require("mysql")

const app = express()

// Home Route
app.get('/', async (req, res) => {
    res.json({
        message: 'Docker Service :D'
    })
})


const pgtools = require("pgtools");
const config = {
  user: "pguser",
  host: "db",
  password: "pgpassword"
};

pgtools.createdb(config, "myFirstDb", function(err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});


const port = 8000
const host = '0.0.0.0'
// Listening Server
app.listen(host, port, () => {
    console.log(`Server is up at port:${port}`)
})


