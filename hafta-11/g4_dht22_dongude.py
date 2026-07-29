import time
import dht
from machine import Pin

sensor = dht.DHT22(Pin(4))

while True:
    try:
        sensor.measure()
        temp = sensor.temperature()
        hum = sensor.humidity()
        print(f"Sicaklik: {temp}°C | Nem: %{hum}")
    except OSError as e:
        print("Sensor okuma hatasi alındı, bir sonraki tur tekrar denenecek:", e)

    time.sleep(2)