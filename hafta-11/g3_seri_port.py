import time

def veri_akisi_baslat():
    sayac = 0
    try:
        while True:
            sayac += 1
            gecen_sure = sayac * 2
            print(f"Sayaç: {sayac} | Geçen Süre: {gecen_sure} saniye")
            time.sleep(2)
    except KeyboardInterrupt:
        print("\nCanlı veri akışı kullanıcı tarafından durduruldu.")

if __name__ == "__main__":
    veri_akisi_baslat()