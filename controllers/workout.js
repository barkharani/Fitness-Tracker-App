exports.createWorkoutType=function(req,res){
  const query = sql = 'INSERT INTO workout_types SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });

}
exports.getAllWorkoutTypes=function(req,res){
  var sql = 'SELECT * FROM `workout_types`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workoutTypes: result
      });
    }
  });
}
exports.updateWorkoutType=function(req,res){
  
  const query = 'UPDATE workout_types SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeWorkoutType=function(req,res){
  const query = 'DELETE FROM workout_types WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getWorkoutType=function(req,res){
  const sql = 'SELECT * FROM workout_types WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workoutType: result
      });
    }
  });
}

exports.createWorkout=function(req,res){
  const query = sql = 'INSERT INTO workouts SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });

}
exports.getAllWorkouts=function(req,res){
  var sql = 'SELECT * FROM `workouts`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workouts: result
      });
    }
  });
}
exports.updateWorkout=function(req,res){
  const query = 'UPDATE workouts SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });

}
exports.removeWorkout=function(req,res){
  const query = 'DELETE FROM workouts WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getWorkout=function(req,res){
  const sql = 'SELECT * FROM workouts WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workout: result
      });
    }
  });
}

exports.createWorkoutJunction=function(req,res){
  const query = sql = 'INSERT INTO workout_junctions SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });

}
exports.getAllWorkoutJunctions=function(req,res){
  var sql = 'SELECT * FROM `workout_junctions`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workoutJunctions: result
      });
    }
  });
}
exports.updateWorkoutJunction=function(req,res){
  const query = 'UPDATE workout_junctions SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeWorkoutJunction=function(req,res){
  const query = 'DELETE FROM workout_junctions WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getWorkoutJunction=function(req,res){
  const sql = 'SELECT * FROM workout_junctions WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workoutJunctions: result
      });
    }
  });
}

exports.createWorkoutTarget=function(req,res){
  const query = sql = 'INSERT INTO workout_targets SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllWorkoutTargets=function(req,res){
  var sql = 'SELECT * FROM `workout_targets`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workoutTargets: result
      });
    }
  });
}
exports.updateWorkoutTarget=function(req,res){
  const query = 'UPDATE workout_targets SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });


}
exports.removeWorkoutTarget=function(req,res){
  
  const query = 'DELETE FROM workout_targets WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getWorkoutTarget=function(req,res){
  const sql = 'SELECT * FROM workout_targets WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        workoutTarget: result
      });
    }
  });
}
