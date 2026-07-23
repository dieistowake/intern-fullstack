// server.js
const express = require("express"); // Express kütüphanesini içeri al

let gorevler = [
  { id: 1, baslik: "Süt al", tamamlandi: false },
  { id: 2, baslik: "Backend öğren", tamamlandi: true },
  { id: 3, baslik: "Elektrik faturasını öde", tamamlandi: false },
];

const app = express();               // Bir Express uygulaması oluştur
const PORT = 3000;                   // Sunucunun dinleyeceği kapı numarası

// GET / isteği geldiğinde çalışacak fonksiyon
app.get("/", (req, res) => {
  res.json({ mesaj: "Merhaba Mehmet, sunucu ayakta!" });
});

// GET /gorevler/:id → id'si eşleşen tek görevi döndür
app.get("/gorevler/:id", (req, res) => {
  const id = Number(req.params.id);
  const gorev = gorevler.find((g) => g.id === id);
  res.json(gorev);
});

// GET /gorevler?tamamlandi=false&ara=süt
app.get("/gorevler", (req, res) => {
  const { tamamlandi, ara } = req.query;
  let sonuc = gorevler;

  if (tamamlandi !== undefined) {
    sonuc = sonuc.filter((g) => String(g.tamamlandi) === tamamlandi);
  }
  if (ara) {
    sonuc = sonuc.filter((g) =>
      g.baslik.toLowerCase().includes(ara.toLowerCase())
    );
  }
  res.json(sonuc);
});

// Sunucuyu başlat ve belirtilen portu dinlemeye başla
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});