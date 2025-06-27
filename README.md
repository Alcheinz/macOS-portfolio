# 🍎 Furkan Kalkan - macOS Portfolio

Modern ve interaktif macOS temalı portfolio websitesi. React ve Framer Motion kullanılarak geliştirilmiştir.

## ✨ Özellikler

- 🖥️ **Gerçekçi macOS Deneyimi**: Otantik macOS görünümü ve hissi
- 📱 **Mobil Uyumlu**: Tüm cihazlarda mükemmel çalışır
- 🎯 **PWA Desteği**: Progressive Web App olarak yüklenebilir
- 🎨 **Interaktif Elementler**: Sürükle-bırak klasörler ve animasyonlar
- 🪟 **Çoklu Modal Sistemi**: Birden fazla pencere aynı anda açılabilir
- 🎵 **Spotify Entegrasyonu**: Gerçek Spotify oynatıcı
- 📁 **Finder Simülasyonu**: macOS Finder benzeri dosya yöneticisi
- 🔗 **Sosyal Medya Entegrasyonu**: GitHub, Instagram, LinkedIn bağlantıları

## 🛠️ Teknolojiler

- **Frontend**: React 18, Vite
- **Animasyonlar**: Framer Motion
- **Stilizasyon**: CSS3, Custom Properties
- **İkonlar**: Lucide React
- **PWA**: Web App Manifest
- **Deployment**: Vercel/Netlify Ready

## 🚀 Kurulum

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:5173
```

## 📱 Mobil Test

Mobil cihazlarda test etmek için:

```bash
npm run dev
```

Sonra aynı WiFi ağındaki mobil cihazınızdan:
```
http://[your-ip]:5173
```

## 🏗️ Build

Production için build almak:

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulur.

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── AboutModal.jsx      # Hakkımda penceresi
│   ├── Desktop.jsx         # Ana masaüstü
│   ├── Dock.jsx           # Alt dock bar
│   ├── EducationModal.jsx  # Eğitim penceresi
│   ├── FinderModal.jsx     # Dosya yöneticisi
│   ├── MenuBar.jsx         # Üst menü çubuğu
│   ├── Modal.jsx           # Modal sistem bileşeni
│   ├── ProjectsModal.jsx   # Projeler penceresi
│   ├── SpotifyModal.jsx    # Spotify oynatıcı
│   ├── StickyNote.jsx      # Yapışkan notlar
│   └── WorkExperienceModal.jsx # İş deneyimi penceresi
├── App.jsx                 # Ana uygulama
├── App.css                 # Ana stiller
└── main.jsx               # Giriş noktası
```

## 🎨 Özelleştirme

### Renkler
Ana renk paletini `src/App.css` dosyasından özelleştirebilirsiniz.

### İçerik
Modal içeriklerini ilgili bileşen dosyalarından düzenleyebilirsiniz:
- `AboutModal.jsx` - Kişisel bilgiler
- `ProjectsModal.jsx` - Proje portföyü
- `WorkExperienceModal.jsx` - İş deneyimleri
- `EducationModal.jsx` - Eğitim bilgileri

### Sosyal Medya
`StickyNote.jsx` dosyasından sosyal medya linklerini güncelleyebilirsiniz.

## 📄 Lisans

Bu proje kişisel kullanım için oluşturulmuştur.

## 👤 İletişim

- **GitHub**: [@Alcheinz](https://github.com/Alcheinz)
- **LinkedIn**: [furkanklkn](https://www.linkedin.com/in/furkanklkn/)
- **Email**: furkanklkn55@gmail.com

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
