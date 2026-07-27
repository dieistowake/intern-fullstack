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
​```bash
git clone https://github.com/dieistowake/intern-fullstack.git
cd intern-fullstack/hafta-10/gorev-defteri-web
​```

### 2. Bağımlılıkları kurun
​```bash
npm install
​```

### 3. Ortam değişkenlerini ayarlayın
Proje kök dizininde (`gorev-defteri-web` klasörünün içinde) `.env` adında bir dosya oluşturun, içine:
​```
VITE_API_URL=http://localhost:3000
​```

### 4. Geliştirme sunucusunu başlatın
​```bash
npm run dev
​```
Komut çalıştıktan sonra uygulama `http://localhost:5173` adresinde yayına girer.

⚠️ Önemli Not: Bu istemci (frontend) uygulamasının veri çekebilmesi ve veritabanı işlemlerini gerçekleştirebilmesi için backend sunucusunun da çalışıyor olması gerekir. gorev-defteri-api projesini ayrı bir terminalde açıp, kendi README talimatlarına göre kurup çalıştırdığınızdan emin olun.