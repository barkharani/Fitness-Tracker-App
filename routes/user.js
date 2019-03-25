	/**
	* Module dependencies.
	*/
	const router = require('express').Router();
const usersCtrl=require('./../controllers/user');
const jwtMid = require('express-jwt');

router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);
router.get('/users',jwtMid({ secret:  config.JWT_SECRET}), usersCtrl.getUsers);

module.exports = router;