DROP DATABASE IF EXISTS contact_db;
CREATE DATABASE contact_db;

\c contact_db

CREATE TABLE contacts (
  ID SERIAL PRIMARY KEY,
  first_name varchar,
  last_name varchar,
  date_of_birth timestamp with time zone,
  eye_color varchar,
  telephone_number varchar
);
