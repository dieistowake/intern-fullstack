const veriGetir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Veritabanından istenen veri başarıyla alındı.");
    }, 1000);
  });
};

const basarisizIstek = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Sunucu bağlantısı zaman aşımına uğradı.");
    }, 1000);
  });
};

const basariliSurec = async () => {
  console.log("--- 1. Başarılı İstek Başlatılıyor ---");
  try {
    const sonuc = await veriGetir();
    console.log("Başarılı Sonuç:", sonuc);
  } catch (hata) {
    console.log("Hata Yakalandı:", hata);
  } finally {
    console.log("İşlem Tamamlandı (Başarılı çağrı - Finally bloğu çalıştı).\n");
  }
};

const hataliSurec = async () => {
  console.log("--- 2. Başarısız İstek Başlatılıyor ---");
  try {
    const sonuc = await basarisizIstek();
    console.log("Bu satır çalışmayacak:", sonuc);
  } catch (hata) {
    console.log("Hata Yakalandı (Catch Bloğu):", hata);
    console.log("Program çökmedi, akış kontrol altında devam ediyor.");
  } finally {
    console.log("İşlem Tamamlandı (Başarısız çağrı - Finally bloğu çalıştı).\n");
  }
};

const anaFonksiyon = async () => {
  await basariliSurec();
  await hataliSurec();
};

anaFonksiyon();