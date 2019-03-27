DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS videos;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS spots;
DROP TABLE IF EXISTS users;

CREATE TABLE spots (
    id SERIAL PRIMARY KEY,
    lat REAL NOT NULL,
    lng REAL NOT NULL,
    name VARCHAR NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    image VARCHAR NOT NULL
    email VARCHAR NOT NULL
    created_at TIMESTAMP DEFAULT NOW(),
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    spot_id INT REFERENCES spots(id),
    user_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    url VARCHAR NOT NULL,
    title VARCHAR NOT NULL
);

CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    spot_id INT REFERENCES spots(id),
    user_id INT REFERENCEs users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    url VARCHAR NOT NULL,
    title VARCHAR NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    spot_id INT REFERENCES spots(id),
    user_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    title VARCHAR NOT NULL,
    text TEXT NOT NULL
);