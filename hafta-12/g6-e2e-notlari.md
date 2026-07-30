# Hafta 12 — Uçtan Uca (E2E) Test Raporu ve Entegrasyon Notları

## 1. Test Özet Bilgileri
* **Donanım/Simülasyon:** ESP32 (Wokwi MicroPython Firmware) + DHT22 Sensör
* **Hedef Backend:** Node.js / Express / Prisma (Railway Dağıtımı)
* **Veritabanı:** PostgreSQL
* **Test Süresi ve Periyot:** 10 saniye aralıklarla sürekli veri gönderimi

---

## 2. Donanım ve Dayanıklılık (Resilience) Test Sonuçları
* **Gönderim Performansı:** ESP32 kartı başlatıldıktan sonra ortalama 10 saniyelik periyotlarla Railway üzerindeki `POST /readings` uç noktasına kesintisiz veri aktardı. Ağ soketleri her HTTP yanıtı sonrasında (`yanit.close()`) kapandığı için bellek ve soket sızıntısı yaşanmadı.
* **Wi-Fi Kopma ve Otomatik Toparlanma Testi:** Simülasyon sırasında ağ bağlantısı manuel olarak kesildiğinde `wifi_kontrol()` fonksiyonu devreye girerek kesintiyi tespit etti. `guvenli_gonder()` fonksiyonundaki `try/except` bloğu ve 3 denemelik retry mekanizması sayesinde ana döngü (`while True`) çökmedi; bağlantı sağlandığı anda veri akışı otomatik olarak `201 Created` yanıtları ile devam etti.

---

## 3. Backend ve Veritabanı Doğrulaması
* **Veri Doğrulama (Validation):** Hatalı veya sınır dışı değerler (-40°C altı, %100 nem üstü vb.) için sunucu `400 Bad Request` yanıtı dönecek şekilde yapılandırıldı.
* **Geçmiş Veri Sorgusu (GET /readings):** 
  * `GET /readings?range=1h` uç noktasına atılan sorgu ile veritabanında son 1 saat içinde oluşturulan tüm kayıtların kronolojik olarak (`createdAt: "asc"`) döndüğü doğrulandı.
  * Karttan gelen `uptimeSaniye` yerine veritabanı seviyesinde `@default(now())` ile zaman damgası basılarak kronolojik tutarlılık garanti altına alındı.

---

## 4. Hafta 13'e Bakış (Capstone Dashboard)
* Hafta 12'de doğrulaması yapılan `GET /readings?range=24h` uç noktası, önümüzdeki hafta React tarafında Recharts ile oluşturulacak sıcaklık ve nem değişim grafiğinin temel veri kaynağı olacaktır.
* Anlık veri akışını sunucuya HTTP POST ile ileten yapıya ek olarak, istemci tarafındaki panoyu canlı tutmak adına WebSocket entegrasyonu planlanacaktır.