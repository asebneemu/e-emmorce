// data.js

// Dinamik dosya adlarına göre resimleri yükleme fonksiyonu
async function importAllImages(start, end) {
  const images = [];
  for (let i = start; i <= end; i++) {
    try {
      const image = await import(`./assets/pictures/bestsellers/b${i}.jpeg`);
      images.push(image.default); // Webpack tarafından import edilen resimlerin yolunu kullanıyoruz
    } catch (err) {
      console.error(`Resim yüklenemedi: b${i}.jpeg`, err);
    }
  }
  return images;
}

// 1'den 100'e kadar olan resimleri dinamik olarak yükle
const images = await importAllImages(1, 100);

// Rastgele resim atama ve 25 ürün oluşturma
const bestsellersData = Array.from({ length: 37 }, (_, index) => ({
  id: index + 1,
  image: images[Math.floor(Math.random() * images.length)], // Rastgele bir resim seç
  title: "Graphic Design",
  description: "Product description goes here",
  oldPrice: "$69.99",
  newPrice: "$49.99",
}));

export default bestsellersData;

