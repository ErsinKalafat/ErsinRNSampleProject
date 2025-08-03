# Ersin React Native Sample Project

React Native ile geliştirilmiş, çoklu ekranlara sahip modern bir mobil uygulamadır.

## Özellikler
- Onboarding, Premium, Home, Diagnose, My Garden, Profile ekranları
- Redux Toolkit ile global state yönetimi
- React Navigation ile sekmeli ve çoklu ekran geçişleri
- i18n ile çoklu dil desteği
- Responsive ve ölçeklenebilir tasarım (sizeNormalize)
- Merkezi renk ve stil yönetimi
- Reusable (tekrar kullanılabilir) component yapısı
- Güvenli link açma ve yardımcı fonksiyonlar
- Kapsamlı birim testleri (Jest)

## Başlangıç
```bash
npm install
npm run android # veya npm run ios
```

## Test
```bash
npm test
```

## Klasör Yapısı
- `src/screens/` : Ekranlar ve alt bileşenleri
- `src/components/` : Ortak componentler
- `src/helpers/` : Yardımcı fonksiyonlar
- `src/styles/` : Merkezi stil dosyaları
- `src/constants/` : Renkler ve sabitler
- `src/store/` : Redux store ve slice'lar

---
Daha fazla bilgi için kodu inceleyebilirsiniz. 