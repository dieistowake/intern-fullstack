# 🏁 Hafta 13 — Gün 7 Review & Capstone Kapanış

## 🎯 Capstone Proje Özeti (Teach-Back)

1. **WebSocket vs. HTTP:** HTTP tek yönlü ve her veri için yeni bir istek-yanıt döngüsüne ihtiyaç duyarken; WebSocket sürekli açık (persistent) ve çift yönlü bir TCP bağlantısı kurar. Panoda veriyi anlık yayınlamak için WebSocket tercih edilmiştir.
2. **useEffect Cleanup:** Bileşen unmount olduğunda veya güncellendiğinde çalışan temizleme mekanizmasıdır. Zombi/yetim soket bağlantılarının kalmasını ve bellek sızıntısını engeller.
3. **Grafik Verisi Origin:** Recharts verisi `GET /readings?range=24h` ucundan gelir. Backend tarafında Prisma ORM, `createdAt` alanı son 24 saate denk gelen kayıtları (`gte: since`) kronolojik sırayla (`orderBy: asc`) getirir.
4. **Derived State & Frontend Eşik Kararı:** Sunum mantığını arayüzde tutmak backend'i hafif tutar. Sunucu durum bilgisini hesaplamak yerine ham veriyi iletir; görünüm kararı frontend'de anlık hesaplanır (derived state).
5. **Cihaz Auth (API Key) vs. Kullanıcı Auth (JWT):** API Key statik donanımların yetkisini şifresiz/oturumsuz doğrular. JWT ise kullanıcı girişli, dinamik oturum ve süre takibi gerektiren yapılar içindir.
6. **Uçtan Uca Akış:** `DHT22 → ESP32 (MicroPython) → POST /readings (+X-API-Key) → Express Middleware → PostgreSQL (Prisma) → WS Broadcast → React (StatusCard + Recharts)`.

---

## 📚 Hafta 13 Terim Defteri

* **WebSocket:** Sunucu ile istemci arasında tam çift yönlü, kalıcı TCP bağlantı protokolü.
* **Broadcast:** Bağlı tüm istemcilere aynı verinin eş zamanlı dağıtılması.
* **Persistent Connection:** Her istek için sıfırdan el sıkışma yapmayan açık bağlantı.
* **Handshake:** HTTP/1.1 üzerinden başlayan bağlantının WebSocket protokolüne yükseltilme (Upgrade) işlemi.
* **Custom Hook:** Bağlantı veya veri çekme mantığını bileşenden ayıran özel React hook'u.
* **useEffect Cleanup:** Yan etkileri temizlemek ve bağlantıları kapatmak için dönen fonksiyon.
* **Connection State:** Bağlantının anlık durumunu (`CONNECTING`, `OPEN`, `CLOSED`) izleyen yapı.
* **Real-time UI:** Sunucudan veri geldiği anda sayfa yenilenmeden güncellenen arayüz.
* **Time Series (Zaman Serisi):** Belirli zaman aralıklarıyla sıralanmış veri kümesi.
* **Min / Maks Aggregation:** Zaman serisindeki uç değerlerin anlık hesaplanması.
* **Tooltip:** Grafik noktaları üzerine gelindiğinde detaylı bilgi gösteren katman.
* **Responsive Chart:** Ekran genişliğine göre boyutlanan esnek grafik konteyneri (`ResponsiveContainer`).
* **Threshold (Eşik):** Uyarı durumunu tetikleyen kritik sınır değerleri.
* **Conditional Rendering:** Koşula bağlı olarak farklı JSX bileşenlerinin ekrana basılması.
* **Derived State:** `useState` kullanmadan mevcut veriden render anında türetilen durum.
* **Status Badge:** Sistem veya veri durumunu gösteren renkli rozet bileşeni.
* **API Key:** Donanımın sunucuya güvenli erişimi için kullanılan sabit gizli anahtar.
* **Environment Variable (`.env`):** Uygulama sırlarını ve dinamik adresleri dışarıda tutan ortam değişkenleri.
* **401 Unauthorized:** Kimlik doğrulamasının eksik veya geçersiz olduğunu bildiren HTTP yanıt kodu.
* **Production Deploy:** Uygulamanın canlık ortama (Railway / Vercel) taşınması.
* **Architecture Diagram:** Sistemin bileşenlerini ve veri akışını gösteren mimari şema.
* **Pitch:** Projenin değerini ve çalışma prensibini aktaran kısa sunum söylemi.
* **Portfolio Piece:** Portföyde sergilenmeye hazır, uçtan uca tamamlanmış nitelikli çalışma.