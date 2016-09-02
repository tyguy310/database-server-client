DROP DATABASE IF EXISTS contact-db;
CREATE DATABASE contact-db;

\c contacts

CREATE TABLE contacts (
  ID SERIAL PRIMARY KEY,
  first_name var char,
  last_name var char,
  date_of_birth,
  eye_color var char,
  telephone_number var char
);
