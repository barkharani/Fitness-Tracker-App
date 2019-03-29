
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