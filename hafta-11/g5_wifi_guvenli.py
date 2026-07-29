import time
import network
from secrets import WIFI_SIFRE, WIFI_SSID

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