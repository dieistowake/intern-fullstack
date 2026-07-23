// server.js
const express = require("express"); // Express kütüphanesini içeri al
const app = express();               // Bir Express uygulaması oluştur
const PORT = 3000;                   // Sunucunun dinleyeceği kapı numarası

// GET / isteği geldiğinde çalışacak fonksiyon
app.get("/", (req, res) => {
  // req = gelen istek (request) bilgisi
  // res = cevap (response) gönderme aracı
  res.json({ mesaj: "Merhaba Mehmet, sunucu ayakta!" });
});

// Sunucuyu başlat ve belirtilen portu dinlemeye başla
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});