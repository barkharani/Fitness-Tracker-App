	/**
	* Module dependencies.
	*/
	const router = require('express').Router();
const usersCtrl=require('./../controllers/user');
const jwtMid = require('express-jwt');

router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);
router.post('/signin/social', usersCtrl.socialLogin);
router.put('/users', usersCtrl.update);
router.put('/user/picture', usersCtrl.uploadProfilePic);
// router.get('/users',jwtMid({ secret:  config.JWT_SECRET}), usersCtrl.getUsers);
// router.get('/user',jwtMid({ secret:  config.JWT_SECRET}), usersCtrl.user);
router.get('/users', usersCtrl.getUsers);
router.get('/user', usersCtrl.user);
router.get('/user/me', usersCtrl.userMe);

module.exports = router;