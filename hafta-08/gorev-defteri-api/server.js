// server.js
const express = require("express"); // Express kütüphanesini içeri al

let gorevler = [
  { id: 1, baslik: "Süt al", tamamlandi: false },
  { id: 2, baslik: "Backend öğren", tamamlandi: true },
  { id: 3, baslik: "Elektrik faturasını öde", tamamlandi: false },
];

const app = express();               // Bir Express uygulaması oluştur
const PORT = 3000;                   // Sunucunun dinleyeceği kapı numarası
app.use(express.json());

// Kendi middleware'in — her istekte otomatik çalışır
function istekLogla(req, res, next) {
  const zaman = new Date().toLocaleTimeString();
  console.log(`[${zaman}] ${req.method} ${req.url}`);
  next(); // ÖNEMLİ: next() çağrılmazsa istek burada takılı kalır, route'a hiç ulaşmaz!
}

app.use(istekLogla); // her route'tan önce çalışsın

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

// POST /gorevler → yeni görev ekle
app.post("/gorevler", (req, res) => {
  const { baslik } = req.body; // client'ın gönderdiği { "baslik": "..." } objesinden okuyoruz

  const yeniGorev = {
    id: gorevler.length + 1,       // basit id üretimi (Hafta 9'da veritabanı bunu otomatik yapacak)
    baslik: baslik,
    tamamlandi: false,
  };

  gorevler.push(yeniGorev);
  res.json(yeniGorev);
});

// Sunucuyu başlat ve belirtilen portu dinlemeye başla
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});