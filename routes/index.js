
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

  router.post('/exercise/equipment', exerciseCtrl.createEquipment);
	router.get('/exercise/equipments', exerciseCtrl.getAllEquipments);
	router.put('/exercise/equipment', exerciseCtrl.updateEquipment);
	router.delete('/exercise/equipment', exerciseCtrl.removeEquipment);
  router.get('/exercise/equipment', exerciseCtrl.getEquipment);
  
  router.post('/exercise/workout/type', workoutCtrl.createWorkoutType);
	router.get('/exercise/workout/types', workoutCtrl.getAllWorkoutTypes);
	router.put('/exercise/workout/type', workoutCtrl.updateWorkoutType);
	router.delete('/exercise/workout/type', workoutCtrl.removeWorkoutType);
  router.get('/exercise/workout/type', workoutCtrl.getWorkoutType);
  
  router.post('/exercise', exerciseCtrl.createExercise);
	router.get('/exercises', exerciseCtrl.getAllExercises);
	router.put('/exercise', exerciseCtrl.updateExercise);
	router.delete('/exercise', exerciseCtrl.removeExercise);
  router.get('/exercise', exerciseCtrl.getExercise);
  
  router.post('/workout', workoutCtrl.createWorkout);
	router.get('/workouts', workoutCtrl.getAllWorkouts);
	router.put('/workout', workoutCtrl.updateWorkout);
	router.delete('/workout', workoutCtrl.removeWorkout);
  router.get('/workout', workoutCtrl.getWorkout);

  router.post('/workout/junction', workoutCtrl.createWorkoutJunction);
	router.get('/workout/junctions', workoutCtrl.getAllWorkoutJunctions);
	router.put('/workout/junction', workoutCtrl.updateWorkoutJunction);
	router.delete('/workout/junction', workoutCtrl.removeWorkoutJunction);
  router.get('/workout/junction', workoutCtrl.getWorkoutJunction);
	
	router.post('/workout/target', workoutCtrl.createWorkoutTarget);
	router.get('/workout/targets', workoutCtrl.getAllWorkoutTargets);
	router.put('/workout/target', workoutCtrl.updateWorkoutTarget);
	router.delete('/workout/target', workoutCtrl.removeWorkoutTarget);
	router.get('/workout/target', workoutCtrl.getWorkoutTarget);
	
  router.post('/log', logCtrl.createlog);
	router.get('/logs', logCtrl.getAllLogs);
	router.put('/log', logCtrl.updateLog);
	router.delete('/log', logCtrl.removeLog);
  router.get('/log', logCtrl.getLog);
  
  router.post('/log/entry', logCtrl.createLogEntry);
	router.get('/log/entries', logCtrl.getAllLogEntries);
	router.put('/log/entry', logCtrl.updateLogEntry);
	router.delete('/log/entry', logCtrl.removeLogEntry);
  router.get('/log/entry', logCtrl.getLogEntry);
  
	module.exports = router;