const { addUserController, showForm, showUsers } = require('../controllers/user.controller')
const router = require('express').Router();
router.get('/', showForm);
router.post('/home', addUserController)
router.get("/allUsers", showUsers)
module.exports = router;

