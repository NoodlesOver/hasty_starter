const addUser = 'INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)';
const getUsers = 'SELECT * FROM users';
const checkEmailExists = 'SELECT u FROM users u WHERE u.email = $1';

module.exports = {
  addUser,
  getUsers,
  checkEmailExists
};