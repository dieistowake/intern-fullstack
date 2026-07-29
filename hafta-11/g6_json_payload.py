import json
import time
import dht
from machine import Pin

# Sensör pin tanımı ve cihaz kimliği
sensor = dht.DHT22(Pin(4))
DEVICE_ID = "esp32-oda-1"

def olcum_yap():
    try:
        sensor.measure()
        return {
            "deviceId": DEVICE_ID,
            "temperature": sensor.temperature(),
            "humidity": sensor.humidity(),
            "uptimeSaniye": time.time()
        }
    except OSError as e:
        print("Sensor okuma hatasi:", e)
        return None

# Ölçümü al ve JSON formatına dönüştür
veri_dict = olcum_yap()

if veri_dict:
    json_payload = json.dumps(veri_dict)
    print("Python Dict :", veri_dict)
    print("JSON String :", json_payload)