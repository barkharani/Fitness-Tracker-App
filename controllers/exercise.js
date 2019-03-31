exports.createType = function (req, res) {
  const query = sql = 'INSERT INTO exercise_types SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllTypes = function (req, res) {
  const sql = 'SELECT * FROM exercise_types';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        exerciseTypes: result
      });
    }
  });
}
exports.updateType = function (req, res) {
  const query = 'UPDATE exercise_types SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeType = function (req, res) {
  const query = 'DELETE FROM exercise_types WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getType = function (req, res) {
  const sql = 'SELECT * FROM exercise_types WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        exerciseType: result
      });
    }
  });
}

exports.createEquipment = function (req, res) {
  const query = sql = 'INSERT INTO exercise_equipments SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllEquipments = function (req, res) {
  var sql = 'SELECT * FROM `exercise_equipments`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        equipments: result
      });
    }
  });
}
exports.updateEquipment = function (req, res) {
  const query = 'UPDATE exercise_equipments SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeEquipment = function (req, res) {
  const query = 'DELETE FROM exercise_equipments WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getEquipment = function (req, res) {
  const sql = 'SELECT * FROM exercise_equipments WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        equipment: result
      });
    }
  });
}

exports.createExercise = function (req, res) {
  const query = sql = 'INSERT INTO exercises SET ?';
  connection.query(query, req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getAllExercises = function (req, res) {
  var sql = 'SELECT * FROM `exercises`';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        exercises: result
      });
    }
  });
}
exports.updateExercise = function (req, res) {
  const query = 'UPDATE exercises SET ? WHERE id = ?'
  connection.query(query, [req.body, req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.removeExercise = function (req, res) {
  const query = 'DELETE FROM exercises WHERE id = ?'
  connection.query(query, [req.query.id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
}
exports.getExercise = function (req, res) {
  const sql = 'SELECT * FROM exercises WHERE id=?';
  connection.query(sql, [req.query.id], function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    } else {
      res.json({
        exercise: result
      });
    }
  });
}