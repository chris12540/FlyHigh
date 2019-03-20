DROP TABLE comments;
DROP TABLE videos;
DROP TABLE spots;

CREATE TABLE spots (
    id SERIAL PRIMARY KEY,
    lat REAL NOT NULL,
    lng REAL NOT NULL,
    name VARCHAR NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    spot_id INT REFERENCES spots(id),
    url VARCHAR NOT NULL,
    name VARCHAR NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    spot_id INT REFERENCES spots(id),
    title VARCHAR NOT NULL,
    text TEXT NOT NULL
);
