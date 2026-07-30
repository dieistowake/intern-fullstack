export const ESIK_SICAKLIK_YUKSEK = 28; // °C üstü uyarı
export const ESIK_SICAKLIK_DUSUK = 15;  // °C altı uyarı
export const ESIK_NEM_YUKSEK = 70;      // % üstü uyarı

export function durumHesapla(temperature: number, humidity: number): "iyi" | "uyari" {
  const sicaklikUyari =
    temperature > ESIK_SICAKLIK_YUKSEK || temperature < ESIK_SICAKLIK_DUSUK;
  const nemUyari = humidity > ESIK_NEM_YUKSEK;

  return sicaklikUyari || nemUyari ? "uyari" : "iyi";
}