import time
import dht
from machine import Pin

# Sensör pin tanımı ve ölçüm periyodu (saniye)
sensor = dht.DHT22(Pin(4))
ARALIK_SANIYE = 10

print("Periyodik olcum baslatiliyor...")

while True:
    try:
        sensor.measure()
        temp = sensor.temperature()
        hum = sensor.humidity()
        print(f"Sicaklik: {temp}°C | Nem: %{hum}")
    except OSError as e:
        print("Sensor okuma hatasi:", e)

    time.sleep(ARALIK_SANIYE)