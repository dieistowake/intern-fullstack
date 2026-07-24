-- INSERT
INSERT INTO gorevler (baslik, tamamlandi) VALUES ('Süt al', false);
INSERT INTO gorevler (baslik, tamamlandi) VALUES ('Backend öğren', true);
INSERT INTO gorevler (baslik) VALUES ('Kitap oku');

-- SELECT
SELECT * FROM gorevler;
SELECT * FROM gorevler WHERE tamamlandi = false;
SELECT baslik FROM gorevler WHERE id = 1;

-- UPDATE
UPDATE gorevler SET tamamlandi = true WHERE id = 1;
SELECT * FROM gorevler WHERE id = 1;

-- DELETE
DELETE FROM gorevler WHERE id = 3;
SELECT * FROM gorevler;

-- LIKE + COUNT
SELECT * FROM gorevler WHERE baslik LIKE '%a%';
SELECT COUNT(*) FROM gorevler;