const tekKullaniciGetir = async () => {
  console.log("--- 1. Tek Kullanıcı Çekiliyor ---");
  try {
    const cevap = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const kullanici = await cevap.json();
    console.log("Kullanıcı Bilgisi:", kullanici);
  } catch (hata) {
    console.log("İstek Başarısız:", hata);
  }
};

const tumKullanicilariIsle = async () => {
  console.log("\n--- 2. Tüm Kullanıcılar Çekiliyor ve İşleniyor ---");
  try {
    const cevap = await fetch("https://jsonplaceholder.typicode.com/users");
    const kullanicilar = await cevap.json();

    const isimVeSehirListesi = kullanicilar.map(({ name, address }) => ({
      isim: name,
      sehir: address.city
    }));
    console.log("İsim ve Şehir Özeti:", isimVeSehirListesi);

    const cHarfiIleBaslayanlar = kullanicilar.filter((kullanici) =>
      kullanici.name.startsWith("C")
    );
    console.log(
      "'C' Harfi ile Başlayan Kullanıcılar:",
      cHarfiIleBaslayanlar.map((k) => k.name)
    );
  } catch (hata) {
    console.log("İstek sırasında hata oluştu:", hata);
  }
};

const hataliIstekKontrolu = async () => {
  console.log("\n--- 3. Hatalı Endpoint İsteği (404 Kontrolü) ---");
  try {
    const cevap = await fetch(
      "https://jsonplaceholder.typicode.com/users/9999"
    );

    if (!cevap.ok) {
      throw new Error(`Kullanıcı bulunamadı! HTTP Durum Kodu: ${cevap.status}`);
    }

    const veri = await cevap.json();
    console.log(veri);
  } catch (hata) {
    console.log("Catch Bloğuna Düşen Hata:", hata.message);
  }
};

const calistir = async () => {
  await tekKullaniciGetir();
  await tumKullanicilariIsle();
  await hataliIstekKontrolu();
};

calistir();