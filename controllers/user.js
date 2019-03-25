	/**
	 * Module dependencies.
	 */

	const jwt = require('jsonwebtoken');
	const atob = require('atob');
	const Cryptr = require('cryptr'),
    cryptr = new Cryptr(config.CRYPTOKEY);
    
	exports.register =  (req, res)=> {
	  let decPass = atob(req.body.password);
	  let encryptedPass = cryptr.encrypt(decPass);
	  let sql = "INSERT INTO `users`(`name`,`mobile`,`email`,`password`) VALUES ('" + req.body.name + "','" + req.body.mobile + "','" + req.body.email + "','" + encryptedPass + "')";

	  connection.query(sql, function (err, result) {
	    if (err) {
	      console.log('Error', err)
	      res.status(500).send(err);
	    } else {
	      res.status(200).send(result);
	    }
	  });
	};

	//---------------------------------------login services----------------------------------------------------------
	exports.login = function (req, res) {
	  var dec_pass = atob(req.body.password);
	  var encrypted_pass = cryptr.encrypt(dec_pass);
	  var sql = "SELECT name, mobile, email FROM `users` WHERE `email`='" + req.body.email + "' AND password = '" + encrypted_pass + "'";

	  connection.query(sql, function (err, results) {
	    if (err) {
	      console.log(err);
	      res.status(500).send(err);
	    }
	    if (results != '') {
	      var data = JSON.stringify(results);
	      var secret = config.JWT_SECRET;
	      var now = Math.floor(Date.now() / 1000),
	        iat = (now - 10),
	        expiresIn = 3600,
	        expr = (now + expiresIn),
	        notBefore = (now - 10),
	        jwtId = Math.random().toString(36).substring(7);
	      var payload = {
	        iat: iat,
	        jwtid: jwtId,
	        data: data
	      };

	      jwt.sign(payload, secret, {
	        algorithm: 'HS256',
	        expiresIn: expiresIn
	      }, function (err, token) {
	        if (err) {
	          res.json({
	            results: {
	              status: false,
	              message: 'Error occurred while generating token'
	            }
	          });
	        } else {
	          if (token != false) {
	            res.header();
	            res.json({
	              results: {
	                status: true,
	                token: token,
	                user: results[0]
	              }
	            });
	            res.end();
	          } else {
	            res.json({
	              results: {
	                status: false,
	                msg: 'Could not create token'
	              },
	            });
	            res.end();
	          }

	        }
	      });
	    } else if (results == '') {
	      res.json({
	        results: {
	          status: false,
	          msg: 'Not found User!'
	        }
	      });
	      res.end();
	    }
	  });
	};

	exports.getUsers = function (req, res) {
	  var sql = "SELECT * FROM `users`";
	  connection.query(sql, function (err, result) {
	    if (err) {
	      console.log(err);
	      res.json(err)
	    } else {
	      res.json({
	        users: result
	      });
	    }
	  });
	}