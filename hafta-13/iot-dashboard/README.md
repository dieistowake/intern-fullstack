# 🔌 IoT Canlı Ölçüm & İzleme Panosu (IoT Dashboard)

ESP32 mikrodenetleyicisi ve DHT22 sensöründen alınan sıcaklık ve nem verilerini, Node.js/Express REST API üzerinden PostgreSQL veritabanına kaydeden ve WebSocket protokolü ile canlı React arayüzüne yayınlayan uçtan uca (end-to-end) IoT takip sistemi.

---

## 🎯 Neden Bu Proje?

Bu proje, 16 haftalık Fullstack Mühendislik yolculuğunun **Capstone (bitirme) projesidir**. Fiziksel/simüle donanım katmanından başlayıp ağ protokollerine, veritabanı mimarisine, canlı yayın (real-time) mekanizmalarına ve modern web arayüzlerine kadar tüm sistem bileşenlerini tek bir mimaride birleştirir.

---

## 📐 Mimari Şeması

```text
[ DHT22 Sensör ]
       │
       ▼ (GPIO4 Pin Okuma)
[ ESP32 (MicroPython) ]
       │
       ▼ (HTTP POST /readings + X-API-Key)
[ Express API Server (Railway) ]
       │
       ├───► [ PostgreSQL (Prisma ORM) ] ── (Kalıcı Depolama)
       │
       ├───► [ WebSocket Broadcast ] ────► [ React Status Card (Canlı Stream) ]
       │
       └───► [ GET /readings?range=24h ] ─► [ Recharts Line Chart (Geçmiş Trend) ]
```

---

## 🛠️ Teknoloji Yığını (Tech Stack)

### Donanım / Gömülü Sistem

- ESP32 Mikrodenetleyici & DHT22 Sensör
  - Not: Çalışma, elimde fiziksel donanım henüz olmadığı için Wokwi online simülatör altyapısı üzerinde, gerçek MicroPython koduyla gerçekleştirilmiştir.
- MicroPython (`urequests`, `network`, `dht`, `machine`)

### Backend (Arka Plan Hizmetleri)

- Node.js & Express.js
- WebSocket (`ws` kütüphanesi) — canlı veri yayını (broadcast)
- Prisma ORM & PostgreSQL — veri modelleme ve sorgulama
- Cihaz kimlik doğrulama — sabit `X-API-Key` middleware koruması
- Dağıtım (deploy): Railway

### Frontend (Kullanıcı Arayüzü)

- React 18 & TypeScript (Vite)
- Recharts — zaman serisi (time-series) sıcaklık/nem grafiği
- Custom hooks — `useCanliOlcum` (WebSocket bağlantı & cleanup), `useGecmisOlcumler` (REST fetch)
- Dağıtım (deploy): Vercel

---

## 🌐 Canlı Demo

- React Pano (Vercel): https://iot-dashboard-three-nu.vercel.app
- API Server (Railway): https://gorev-defteri-api-production.up.railway.app
- WebSocket Server (Railway): wss://gorev-defteri-api-production.up.railway.app

---

## 🚀 Kurulum

Bu depo yalnızca frontend'i (React pano) içerir — backend (`gorev-defteri-api`) ayrı bir repoda yaşar ve zaten Railway'de canlıdır, ayrıca kurmana gerek yok.

```bash
git clone https://github.com/dieistowake/intern-fullstack.git
cd intern-fullstack/hafta-13/iot-dashboard
npm install
```

Kök dizinde bir `.env` dosyası oluştur:

```
VITE_API_URL=https://gorev-defteri-api-production.up.railway.app
VITE_WS_URL=wss://gorev-defteri-api-production.up.railway.app
```

Geliştirme sunucusunu başlat:

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç — kart (fiziksel veya Wokwi simülasyonu) veri gönderdikçe pano canlı güncellenecektir.
