# Görev Defteri — Web Frontend

Kullanıcıların kayıt olup giriş yapabildiği, kişisel görevlerini güvenli bir şekilde ekleyip yönetebildiği fullstack yapılacaklar listesi uygulamasının React tabanlı web arayüzü.

## 🔗 Canlı Demo
Uygulamayı canlıda deneyimleyebilirsiniz:  
👉 **[Intern-Fullstack-Web](https://intern-fullstack-black.vercel.app)**  
*(Backend servisi Railway üzerinde barındırılmaktadır.)*

---

## 🛠 Kullanılan Teknolojiler

- **Frontend Framework:** React 18, Vite
- **Durum Yönetimi & Yaşam Döngüsü:** React Hooks (`useState`, `useEffect`)
- **API İletişimi:** Fetch API (Asenkron istekler)
- **Oturum Saklama:** `localStorage` (JWT saklama)
- **Stil & Tasarım:** CSS3
- **Deployment:** Vercel

---

## ✨ Özellikler

- **Kullanıcı Kaydı ve Girişi:** Backend API üzerindeki `/register` ve `/login` rotaları üzerinden erişim sağlama.
- **Güvenli Oturum:** Başarılı giriş sonrası alınan JWT token'ının `localStorage` üzerinde saklanması ve sonraki tüm korunan isteklere (`Authorization: Bearer <token>`) otomatik eklenmesi.
- **Kişiselleştirilmiş Görev Listesi:** Giriş yapmış kullanıcının sadece kendisine ait olan görevleri veritabanından çekip görüntülemesi.
- **Anlık Görev Ekleme:** Sayfa yenilenmesine gerek kalmadan yeni görevin oluşturulması ve arayüz durumunun (state) anında güncellenmesi.

---

## 🚀 Lokalde Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Depoyu klonlayın ve ilgili dizine geçin
```bash
git clone https://github.com/dieistowake/intern-fullstack.git
cd intern-fullstack/hafta-10/gorev-defteri-web
```

### 2. Bağımlılıkları kurun
```bash
npm install
```

### 3. Ortam değişkenlerini ayarlayın
Proje kök dizininde (`gorev-defteri-web` klasörünün içinde) `.env` adında bir dosya oluşturun, içine:
```
VITE_API_URL=http://localhost:3000
```

### 4. Geliştirme sunucusunu başlatın
```bash
npm run dev
```
Komut çalıştıktan sonra uygulama `http://localhost:5173` adresinde yayına girer.

⚠️ Önemli Not: Bu istemci (frontend) uygulamasının veri çekebilmesi ve veritabanı işlemlerini gerçekleştirebilmesi için backend sunucusunun da çalışıyor olması gerekir. gorev-defteri-api projesini ayrı bir terminalde açıp, kendi README talimatlarına göre kurup çalıştırdığınızdan emin olun.

---

## 🧠 Öğrendiklerim

- **İstemci Tarafında Oturum Kalıcılığı (JWT & LocalStorage):** React state'inin sayfa yenilendiğinde sıfırlanması nedeniyle JWT token'ını `localStorage` üzerinde saklama mimarisini uyguladım. Uygulama ilk yüklendiğinde oturum durumunu doğrula/temizle adımlarını kurgulayarak kullanıcı deneyimini kesintisiz hale getirmeyi deneyimledim.
- **Korumalı HTTP İstekleri ve Authorization Header:** Korumalı rotalara gönderilen her `fetch` isteğine `Authorization: Bearer <token>` başlığının manuel olarak eklenmesi gerektiğini, bu başlık eksik olduğunda backend'in 401 Unauthorized yanıtı dönerek veriyi izole ettiğini pratik ederek kavradım.
- **Dinamik UI Senkronizasyonu:** Yeni görev ekleme veya durum değiştirme işlemlerinden sonra tüm sayfayı yeniden yüklemek yerine, React state'ini anlık güncelleyerek arayüz (UI) ile veritabanı durumunu senkron tutmayı öğrendim.