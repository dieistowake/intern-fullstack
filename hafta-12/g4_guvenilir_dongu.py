import json
import time
import dht
import network
import urequests as requests
from machine import Pin
from secrets import WIFI_SIFRE, WIFI_SSID

# Sabitler
DEVICE_ID = "esp32-oda-1"
ARALIK_SANIYE = 10
API_URL = "https://gorev-defteri-api-production.up.railway.app/readings"

# Sensör
sensor = dht.DHT22(Pin(4))

def wifi_kontrol():
    """WiFi bağlantısını denetler, kopmuşsa yeniden bağlanır."""
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)

    if not wlan.isconnected():
        print(f"\n[WIFI] {WIFI_SSID} agina yeniden baglaniliyor", end="")
        wlan.connect(WIFI_SSID, WIFI_SIFRE)

        baslangic = time.time()
        while not wlan.isconnected():
            if time.time() - baslangic > 15:
                print("\n[WIFI] Baglanti zaman asimi!")
                return False
            print(".", end="")
            time.sleep(0.5)

        print("\n[WIFI] Baglanti kuruldu! IP:", wlan.ifconfig()[0])
    return True

def guvenli_gonder(payload, deneme=3):
    """HTTP POST isteğini belirtilen deneme sayısı kadar tekrar dener."""
    for hak in range(1, deneme + 1):
        try:
            print(f"[HTTP] Veri gonderiliyor (Deneme {hak}/{deneme})...")
            yanit = requests.post(API_URL, json=payload)
            durum = yanit.status_code
            yanit.close()  # Soketi serbest bırak

            if durum == 201:
                print("[HTTP] Veri başarıyla kaydedildi (201 Created).")
                return True
            else:
                print(f"[HTTP] Sunucu hatasi: Status {durum}")

        except Exception as e:
            print(f"[HTTP] Baglanti hatasi ({hak}/{deneme}):", e)

        time.sleep(2)  # Tekrar denemeden önce bekle

    print("[HTTP] Tum denemeler basarisiz oldu. Veri paketlendi ancak iletilemedi.")
    return False

# Ana Döngü
print("Dayanıklı ölçüm döngüsü başlatılıyor...")

while True:
    # 1. Ağ Kontrolü
    if wifi_kontrol():
        # 2. Sensör Okuma
        try:
            sensor.measure()
            payload = {
                "deviceId": DEVICE_ID,
                "temperature": sensor.temperature(),
                "humidity": sensor.humidity()
            }
            
            # 3. Güvenli Gönderim
            guvenli_gonder(payload)

        except OSError as e:
            print("[SENSOR] Sensör okuma hatasi:", e)

    # 4. Bekleme Periyodu
    time.sleep(ARALIK_SANIYE)