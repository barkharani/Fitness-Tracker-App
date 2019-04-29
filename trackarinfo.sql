CREATE TABLE IF NOT EXISTS users (
id INT NOT NULL AUTO_INCREMENT,
name varchar(25),
mobile varchar(12),
password varchar(20),
email varchar(50),
profile_picture TEXT,
gender TEXT,
dob date,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS status
(
id INT NOT NULL AUTO_INCREMENT,
status_title TEXT NOT NULL,
user_id INT,
like_count INT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments
(
id INT NOT NULL AUTO_INCREMENT,
comment_title TEXT NOT NULL,
user_id INT,
status_id INT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id),
FOREIGN KEY(status_id) REFERENCES status(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS exercise_types
(
id INT NOT NULL AUTO_INCREMENT,
exercise_type TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS exercise_equipments
(
id INT NOT NULL AUTO_INCREMENT,
equipment_name TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS workout_types
(
id INT NOT NULL AUTO_INCREMENT,
workout_type TEXT,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS exercises
(
id INT  NOT NULL AUTO_INCREMENT,
exercise_name TEXT,
exercise_type_id INT,
exercise_equipment_id INT,
PRIMARY KEY(id),
FOREIGN KEY(exercise_type_id) REFERENCES exercise_types(id),
FOREIGN KEY(exercise_equipment_id) REFERENCES exercise_equipments(id)
);

CREATE TABLE IF NOT EXISTS workouts
(
id INT  NOT NULL AUTO_INCREMENT,
workout_name TEXT,
workout_type_id INT,
exercise_equipment_id INT,
PRIMARY KEY(id),
FOREIGN KEY(workout_type_id) REFERENCES workout_types(id)
);

CREATE TABLE IF NOT EXISTS workout_junctions
(
id INT  NOT NULL AUTO_INCREMENT,
exercise_id INT,
workout_id INT,
PRIMARY KEY(id),
FOREIGN KEY(exercise_id) REFERENCES exercises(id),
FOREIGN KEY(workout_id) REFERENCES workouts(id)
);

CREATE TABLE IF NOT EXISTS logs
(
id INT  NOT NULL AUTO_INCREMENT,
workout_id INT,
date TIMESTAMP,
PRIMARY KEY(id),
FOREIGN KEY(workout_id) REFERENCES workouts(id)
);

CREATE TABLE IF NOT EXISTS workout_targets
(
id INT  NOT NULL AUTO_INCREMENT,
junction_id INT,
set_number INT,
min_reps INT,
max_reps INT,
PRIMARY KEY(id),
FOREIGN KEY(junction_id) REFERENCES workout_junctions(id)
);

CREATE TABLE IF NOT EXISTS log_entries
(
id INT  NOT NULL AUTO_INCREMENT,
log_id INT,
junction_id INT,
set_number INT,
weight INT,
reps INT,
time_recorded TIMESTAMP,
PRIMARY KEY(id),
FOREIGN KEY(junction_id) REFERENCES workout_junctions(id),
FOREIGN KEY(log_id) REFERENCES logs(id)
);