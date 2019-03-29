
<<<<<<< HEAD
	/**
	 * Module dependencies.
	 */
	const router = require('express').Router();
	const jwtMid = require('express-jwt');
	const exerciseCtrl = require('./../controllers/exercise');
	const workoutCtrl = require('./../controllers/workout');
	const logCtrl = require('./../controllers/log');

	router.post('/exercise/type', exerciseCtrl.createType);
	router.get('/exercise/types', exerciseCtrl.getAllTypes);
	router.put('/exercise/type', exerciseCtrl.updateType);
	router.delete('/exercise/type', exerciseCtrl.removeType);
	router.get('/exercise/type', exerciseCtrl.getType);

  
	module.exports = router;
=======
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.body);
	res.end();
};
>>>>>>> fe21eb0b1ece6c74199febdc621f626f23d91648
