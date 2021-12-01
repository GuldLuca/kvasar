DROP TABLE IF EXISTS users;

CREATE TABLE users(
	id serial primary key,
	ts timestamp default Now(),
	tx text
)
