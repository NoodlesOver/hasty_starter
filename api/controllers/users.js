const pool = require('../db');
const queries = require('../queries/users');
const { validationResult } = require('express-validator');

const addUser = (req, res) => {
  const { first_name, last_name, email } = req.body;
  const errors = validationResult(req);
  console.log(errors);
  if(!errors.isEmpty()){
    res.json(errors.array());
  } else {
    pool.query(queries.checkEmailExists, [email], (error, results) => {
      if(results.rows.length){
        res.send("Email already exists.");
      } else {
      pool.query(queries.addUser, [first_name, last_name, email], (error, results) => {
        if(error) throw error;
        res.status(201).send("User added successfully!");
        console.log("user created");
      })
    }});
  }
}

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (err, results) => {
    if(err) throw err;
    res.status(200).json(results.rows);
  });
}

module.exports = {
  addUser,
  getUsers
}