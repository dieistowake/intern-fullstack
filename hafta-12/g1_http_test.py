import time
import network
import urequests as requests
from secrets import WIFI_SIFRE, WIFI_SSID
# 1. WiFi Bağlantısı
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
if not wlan.isconnected():
    print(f"{WIFI_SSID} agina baglaniliyor", end="")
    wlan.connect(WIFI_SSID, WIFI_SIFRE)
    baslangic = time.time()
    while not wlan.isconnected():
        if time.time() - baslangic > 15:
            print("\nZaman asimi: WiFi baglantisi kurulamadi.")
            break
        print(".", end="")
        time.sleep(0.5)
if wlan.isconnected():
    print("\nWiFi baglantisi basarili!")
    print("Alinan IP Adresi:", wlan.ifconfig()[0])
    # 2. HTTP POST Test İsteği
    url = "https://httpbin.org/post"
    test_veri = {"merhaba": "ESP32", "sicaklik": 23.4}
    print("HTTP POST istegi gonderiliyor...")
    yanit = requests.post(url, json=test_veri)
    print("Durum Kodu (Status Code):", yanit.status_code)
    print("Sunucu Yaniti (Text):\n", yanit.text)
    yanit.close()