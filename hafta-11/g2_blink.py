import time
from machine import Pin

# ESP32 üzerindeki dahili LED'i (GPIO 2) çıkış olarak tanımla
led = Pin(2, Pin.OUT)

# Sonsuz döngü: LED'i 0.5 saniye aralıklarla yak ve söndür
while True:
    led.value(1)
    print("blink!")
    time.sleep(0.5)

    led.value(0)
    time.sleep(0.5)