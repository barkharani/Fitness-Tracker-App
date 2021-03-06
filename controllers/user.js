	/**
	 * Module dependencies.
	 */

	const jwt = require('jsonwebtoken');
	const atob = require('atob');
	const Cryptr = require('cryptr'),
		cryptr = new Cryptr(config.CRYPTOKEY);
	const fs = require('fs')
	const path = require('path')

	exports.register = (req, res) => {
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
		var sql = "SELECT id, name, mobile, dob, gender, email FROM `users` WHERE `email`='" + req.body.email + "' AND password = '" + encrypted_pass + "'";

		connection.query(sql, function (err, results) {
			jwtLogin(res, err, results);
		});
	};
	exports.socialLogin = function (req, res) {
		var email = req.body.email;
		var sql = "SELECT id, name, mobile, dob, gender, email FROM `users` WHERE `email`='" + email + "'";

		connection.query(sql, function (err, results) {

			if (results != "") {
				jwtLogin(res, err, results);

			} else if (results == "") {
				var name = req.body.name;

				var sql = "INSERT INTO `users`(`name`,`email`) VALUES ('" + name + "','" + email + "')";

				connection.query(sql, function (err, result) {
					if (err) {
						console.log('Error', err)
						res.end(JSON.stringify(result));
					} else {

						// make login
						var sql = "SELECT id, name, mobile, dob, gender, email FROM `users` WHERE `email`='" + email + "'";

						connection.query(sql, function (err, results) {
							jwtLogin(res, err, results);
						});
					}
				});
			}
		});
	};
	exports.update = (req, res) => {
		const id = req.body.id;
		delete req.body.id;

		if (req.body.password) {
			delete req.body.password;
		}

		if (req.body.dob) {
			req.body.dob = new Date(req.body.dob)
		}

		const query = 'UPDATE users SET ? WHERE id = ?'
		connection.query(query, [req.body, id], (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				res.status(200).send(result);
			}
		});
	};

	exports.uploadProfilePic = function (req, res) {
		const file = req.files.profile_picture;
		const destPath = __basedir + '/public/upload/'
		const fileName = new Date().getTime() + file.name

		file.mv(destPath + fileName, function (err, data) {
			if (err) {
				console.log(err);
				res.json(err)
			} else {
				let fileUpdateData = {
					profile_picture: 'api-server/public/upload/' + fileName
				}
				const query = 'UPDATE users SET ? WHERE id = ?'
				connection.query(query, [fileUpdateData, req.query.id], (err, result) => {
					if (err) {
						console.log(err);
						res.status(500).send(err);
					} else {
						res.status(200).send(fileUpdateData);
					}
				});
			}
		});
	};


	exports.getUsers = function (req, res) {
		var sql = `Select * from users where id!=${req.query.id} AND id NOT IN 
		(select friend_id from friends where user_id=${req.query.id})`;
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
	exports.user = function (req, res) {
		var sql = "SELECT * FROM `users WHERE email = ?`";
		connection.query(sql, [req.query.email], function (err, result) {
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

	exports.userMe = function (req, res) {
		var sql = `Select * from users where id=${req.query.id}`;
		connection.query(sql, function (err, result) {
			if (err) {
				console.log(err);
				res.json(err)
			} else {
				res.json({
					results: {
						status: true,
						user: result[0]
					}
				});
			}
		});
	}

	// util func
	function jwtLogin(res, err, results) {
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

	}