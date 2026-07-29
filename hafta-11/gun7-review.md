# Hafta 11 — Gün 7 Review

## Soru-Cevap

**1. Bilgisayar ile mikrodenetleyici arasındaki temel fark ne? GPIO ne işe yarar?**
Bilgisayar genel amaçlı işler yaparken mikrodenetleyici tek bir görevi yürütür. GPIO pinleri dış dünyayla elektrik sinyalleri üzerinden haberleşmeyi sağlar.

**2. `Pin(2, Pin.OUT)` satırı ne yapıyor? `.value(1)` ile `.value(0)` arasındaki fark ne?**
Pin komutu ikinci pini çıkış olarak ayarlar. Değerin bir yapılması pine yüksek voltaj vererek devre elemanını çalıştırır, sıfır yapılması ise voltajı keserek söndürür.

**3. Seri port nedir, baud rate ne anlama gelir? İki taraf uyuşmazsa ne olur?**
Seri port iki cihaz arasındaki veri hattıdır ve baud rate bu hattın iletişim hızını belirtir. Hızlar uyuşmazsa ekranda bozuk karakterler oluşur.

**4. DHT22'yi ESP32'ye nasıl bağladın (3 pin, hangi GPIO)? Okuma neden bazen `OSError` verebiliyor?**
DHT22 sensörünün güç bacağı üç nokta üç volta, toprak bacağı pine, veri bacağı ise dördüncü GPIO pinine bağlanır. Dijital haberleşmedeki anlık zamanlama hataları bu sensörde hata fırlatılmasına yol açar.

**5. `wlan.isconnected()` ne kontrol eder? Şifreni neden `secrets.py`'ye ayırdın?**
Ağ kontrol fonksiyonu cihazın kablosuz ağa bağlı olup olmadığını denetler. Şifrelerin ayrı dosyada tutulması kodun güvenliğini sağlar ve sızıntıları önler.

**6. `json.dumps()` bir dict'e ne yapar? Bu payload'u haftaya nereye göndereceksin?**
Dönüştürme fonksiyonu veriyi ağ üzerinden taşınabilir bir metin formatına getirir. Bu veri paketi gelecek hafta geliştirilen sunucu API adresine gönderilecektir.

## Terim Defteri

mikrodenetleyici, firmware, flash, REPL, GPIO, pin, output, input, machine modülü,
seri port, UART, baud rate, sensör, pull-up direnç, dijital sinyal, OSError, örnekleme,
WiFi, SSID, WLAN, STA mode, IP adresi, JSON serialize, payload, epoch/uptime, sabit

## Küçük Zafer

Haftanın tamamını, koda bakmadan, kendi cümlelerimle anlatabildim.

## Haftaya Bakış

Hafta 12'de bu JSON paketi artık ekrana değil, Node/Express API'me gidecek —
`print()` yerine `urequests.post()`.