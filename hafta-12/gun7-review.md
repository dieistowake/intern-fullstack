# Hafta 12 — Gün 7 Review

## Soru-Cevap

**1. HTTP POST ile GET arasındaki fark ne? req.body ile req.query nerede kullanılır?**
HTTP POST sunucuya yeni veri göndermek için body alanını kullanırken, GET sunucudan veri sorgulamak için kullanılır; `req.body` oluşturulacak veriyi taşımada, `req.query` ise URL üzerindeki filtreleme parametrelerinde tercih edilir.

**2. yanit.close() neden ESP32'de elle çağrılması gerekiyor, ne olmazsa ne olur?**
MicroPython masaüstü Python gibi soketleri otomatik kapatmadığı için `yanit.close()` elle çağrılmalıdır, aksi takdirde sınırlı soket kaynağı tükenir ve kart internete erişemez hale gelir.

**3. Validation neden route'un en başında yapılır, veritabanına yazmadan önce?**
Hatalı verinin veritabanını kirletmesini önlemek, gereksiz sorgu yükü oluşturmamak ve istemciye hızlıca hata dönebilmek için doğrulama route'un başında yapılır.

**4. guvenli_gonder() fonksiyonu bir istek başarısız olunca ne yapıyor? Neden 1 kere değil de birkaç kere deniyor?**
`guvenli_gonder()` fonksiyonu başarısız bir istek aldığında döngüyü kırıp çökertmek yerine belirli bir bekleme süresiyle işlemi yeniden dener; anlık ağ dalgalanmaları ve geçici sunucu kesintilerinde verinin tamamen kaybolmasını engellemek için tek denemeyle sınırlı kalmaz.

**5. range=24h sorgu parametresi Prisma tarafında nasıl bir where koşuluna dönüşüyor?**
`range=24h` parametresi Prisma tarafında `createdAt` alanının şimdiki zamandan 24 saat öncesine eşit veya daha büyük olmasını sağlayan `gte` (greater than or equal) koşuluna dönüşür.

**6. Bu haftaki en kırılgan nokta neresiydi (WiFi kopması mı, sensör hatası mı, sunucu çökmesi mi)? Nasıl önledin?**
Bu haftanın en kırılgan noktası geçici kopmalar ve zaman aşımı riskleri nedeniyle WiFi ve HTTP haberleşme katmanıydı; bu durum ana döngüyü `try/except Exception` blokları, yeniden bağlanma mantığı ve tekrar deneme mekanizmasıyla sararak tam dayanıklı hale getirilmiştir.

## Terim Defteri

HTTP POST, request body, urequests, Prisma model, migration, route handler, 
201 Created, validation, 400 Bad Request, deviceId, retry, exception handling, 
resilience, timeout, query parameter, orderBy, date range, gte, end-to-end test, pipeline

## Küçük Zafer

ESP32 mikrodenetleyicisinden çıkan canlı sensör verisini, Railway üzerinde çalışan kendi Node.js/Prisma API'me uçtan uca dayanıklı bir boru hattı (pipeline) kurarak yazmayı ve sorgulamayı başardım.

## Haftaya Bakış

Hafta 13 Capstone haftası — Bu veriyi artık veritabanında tutmakla kalmayıp, React ve Recharts kullanarak canlı bir panoda (Dashboard) görselleştireceğiz.