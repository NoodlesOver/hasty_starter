const { Router } = require('express');
const router = Router();
const controller = require('../controllers/users');
const { check } = require('express-validator');

router.get('/', controller.getUsers);
router.post('/', [
  check("first_name").exists().withMessage("First Name is required").isString().withMessage("First Name must be a string"),
  check("last_name").exists().withMessage("Last Name is required").isString().withMessage("Last Name must be a string"),
  check("email").exists().withMessage("email is required").isEmail().withMessage("valid email is required")
], controller.addUser);

module.exports = router;