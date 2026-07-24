CREATE DATABASE gorev_defteri;

CREATE TABLE gorevler (
  id SERIAL PRIMARY KEY,
  baslik VARCHAR(255) NOT NULL,
  tamamlandi BOOLEAN DEFAULT false
);