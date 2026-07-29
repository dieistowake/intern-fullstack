import json
import time
import dht
import network
from machine import Pin
from secrets import WIFI_SIFRE, WIFI_SSID

# Sabitler
DEVICE_ID = "esp32-oda-1"
ARALIK_SANIYE = 10

# WiFi Bağlantı Fonksiyonu
def wifi_baglan():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)

    if not wlan.isconnected():
        print(f"{WIFI_SSID} agina baglaniliyor", end="")
        wlan.connect(WIFI_SSID, WIFI_SIFRE)

        baslangic = time.time()
        while not wlan.isconnected():
            if time.time() - baslangic > 15:
                print("\nWiFi baglanti zamanasimi!")
                return False
            print(".", end="")
            time.sleep(0.5)

    print("\nWiFi baglantisi basarili!")
    print("IP Adresi:", wlan.ifconfig()[0])
    return True

# 1. Başlangıçta WiFi'ye bağlan
wifi_baglan()

# 2. Sensör tanımlaması
sensor = dht.DHT22(Pin(4))

# 3. Ana ölçüm ve yayın döngüsü
while True:
    try:
        sensor.measure()
        payload_dict = {
            "deviceId": DEVICE_ID,
            "temperature": sensor.temperature(),
            "humidity": sensor.humidity(),
            "uptimeSaniye": time.time()
        }
        
        json_payload = json.dumps(payload_dict)
        print("[PAYLOAD HAFZA]:", json_payload)

    except OSError as e:
        print("Sensör okuma hatasi alındı:", e)

    time.sleep(ARALIK_SANIYE)