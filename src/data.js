/* eslint-disable no-undef */
// src/data.js

// Elbise resimleri
import e1 from "./assets/pictures/bestsellers/elbise1.jpg";
import e2 from "./assets/pictures/bestsellers/elbise2.jpg";
import e3 from "./assets/pictures/bestsellers/elbise3.jpg";
import e4 from "./assets/pictures/bestsellers/elbise4.jpg";
import e5 from "./assets/pictures/bestsellers/elbise5.jpg";
import e6 from "./assets/pictures/bestsellers/elbise6.jpg";
import e7 from "./assets/pictures/bestsellers/elbise7.jpg";

const imagesElbise = [e1, e2, e3, e4, e5, e6, e7];

// Çanta resimleri
import c1 from "./assets/pictures/bestsellers/canta1.jpg";
import c2 from "./assets/pictures/bestsellers/canta2.jpg";
import c3 from "./assets/pictures/bestsellers/canta3.jpg";
import c4 from "./assets/pictures/bestsellers/canta4.jpg";
import c5 from "./assets/pictures/bestsellers/canta5.jpg";
import c6 from "./assets/pictures/bestsellers/canta6.jpg";
import c7 from "./assets/pictures/bestsellers/canta7.jpg";
import c8 from "./assets/pictures/bestsellers/canta8.jpg";
import c9 from "./assets/pictures/bestsellers/canta9.jpg";
import c10 from "./assets/pictures/bestsellers/canta10.jpg";
import c11 from "./assets/pictures/bestsellers/canta11.jpg";
import c12 from "./assets/pictures/bestsellers/canta12.jpg";
import c13 from "./assets/pictures/bestsellers/canta13.jpg";
import c14 from "./assets/pictures/bestsellers/canta14.jpg";
import c15 from "./assets/pictures/bestsellers/canta15.jpg";
import c16 from "./assets/pictures/bestsellers/canta16.jpg";
import c17 from "./assets/pictures/bestsellers/canta17.jpg";
import c18 from "./assets/pictures/bestsellers/canta18.jpg";
import c19 from "./assets/pictures/bestsellers/canta19.jpg";
import c20 from "./assets/pictures/bestsellers/canta20.jpg";

const imagesCanta = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20];

// Tişört resimleri
import t1 from "./assets/pictures/bestsellers/tisort1.jpg";
import t2 from "./assets/pictures/bestsellers/tisort2.jpg";
import t3 from "./assets/pictures/bestsellers/tisort3.jpg";
import t4 from "./assets/pictures/bestsellers/tisort4.jpg";

const imagesTisort = [t1, t2, t3, t4];

// Pantolon resimleri
import p1 from "./assets/pictures/bestsellers/pantalon1.jpg";
import p2 from "./assets/pictures/bestsellers/pantalon2.jpg";
import p3 from "./assets/pictures/bestsellers/pantalon3.jpg";
import p4 from "./assets/pictures/bestsellers/pantalon4.jpg";
import p5 from "./assets/pictures/bestsellers/pantalon5.jpg";

const imagesPantalon = [p1, p2, p3, p4, p5];

import team01 from "./assets/team/team1.jfif";
import team02 from "./assets/team/team2.jfif";
import team03 from "./assets/team/team3.jfif";
import team04 from "./assets/team/team4.jfif";
import team05 from "./assets/team/team5.jfif";

import k1 from "./assets/pictures/bestsellers/c1.jpeg";
import k2 from "./assets/pictures/bestsellers/c2.jpeg";
import k3 from "./assets/pictures/bestsellers/c3.jpeg";
import k4 from "./assets/pictures/bestsellers/c4.jpeg";
import k5 from "./assets/pictures/bestsellers/c5.jpeg";
import k6 from "./assets/pictures/bestsellers/c6.jpeg";
import k7 from "./assets/pictures/bestsellers/c7.jpeg";
import k8 from "./assets/pictures/bestsellers/c8.jpeg";
import k9 from "./assets/pictures/bestsellers/c9.jpeg";
import k10 from "./assets/pictures/bestsellers/c10.jpeg";
import k11 from "./assets/pictures/bestsellers/c11.jpeg";
import k12 from "./assets/pictures/bestsellers/c12.jpeg";
import k13 from "./assets/pictures/bestsellers/c13.jpeg";
import k14 from "./assets/pictures/bestsellers/c14.jpeg";
import k15 from "./assets/pictures/bestsellers/c15.jpeg";
import k16 from "./assets/pictures/bestsellers/c16.jpeg";
import k17 from "./assets/pictures/bestsellers/c17.jpeg";
import k18 from "./assets/pictures/bestsellers/c18.jpeg";
import k19 from "./assets/pictures/bestsellers/c19.jpeg";
import k20 from "./assets/pictures/bestsellers/c20.jpeg";

const images = [
  k1, k2, k3, k4, k5, k6, k7, k8, k9, k10,
  k11, k12, k13, k14, k15, k16, k17, k18, k19, k20,
];
// Rastgele resim seçme fonksiyonları
const getRandomImageByCategory = (category, id) => {
  let images = [];
  switch (category) {
    case "elbise":
      images = imagesElbise;
      break;
    case "canta":
      images = imagesCanta;
      break;
    case "tisort":
      images = imagesTisort;
      break;
    case "pantalon":
      images = imagesPantalon;
      break;
    default:
      images = imagesElbise; // Varsayılan kategori elbise olabilir
  }

  // Resmi localStorage'a kaydetmek için id kullanarak benzersiz bir anahtar oluşturun
  const key = `${category}_image_${id}`;
  const savedImage = localStorage.getItem(key);

  if (savedImage) {
    return savedImage;
  } else {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    localStorage.setItem(key, randomImage);
    return randomImage;
  }
};

// Rastgele bir resim seçme fonksiyonu (sabit kalması için localStorage kullanarak)
const getRandomImage = (id) => {
  const key = `product_image_${id}`;
  const savedImage = localStorage.getItem(key);

  if (savedImage) {
    return savedImage;
  } else {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    localStorage.setItem(key, randomImage);
    return randomImage;
  }
};

// Rastgele bir rating değeri oluşturma fonksiyonu (0.1 ile 5.0 arasında)
const getRandomRating = (id) => {
  const key = `product_rating_${id}`;
  const savedRating = localStorage.getItem(key);

  if (savedRating) {
    return parseFloat(savedRating);
  } else {
    const randomRating = (Math.random() * (5 - 0.1) + 0.1).toFixed(1);
    localStorage.setItem(key, randomRating);
    return parseFloat(randomRating);
  }
};

const getRandomPrice = (id) => {
  const key = `product_price_${id}`;
  const savedPrice = localStorage.getItem(key);

  if (savedPrice) {
    return parseFloat(savedPrice);
  } else {
    const integerPart = Math.floor(Math.random() * (150 - 5 + 1)) + 5; // 5 ile 150 arasında tam sayı
    const decimalPart = (Math.random() * 0.99).toFixed(2); // 0.00 ile 0.99 arasında ondalık
    const randomPrice = parseFloat(`${integerPart}.${decimalPart.split(".")[1]}`);
    localStorage.setItem(key, randomPrice);
    return randomPrice;
  }
};

// Ana veri setleri
const totalBestsellers = 70;
const bestsellersData = [];

for (let i = 1; i <= totalBestsellers; i++) {
  bestsellersData.push({
    id: i,
    image: getRandomImage(i),
    title: "Graphic Design",
    description: "Product description goes here. Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    oldPrice: "$69.99",
    newPrice: "$49.99",
    rating: getRandomRating(i + totalBestsellers),
  });
}

const totalShopBestsellers = 70;
const shopBestsellersData = [];

for (let i = 1; i <= totalShopBestsellers; i++) {
  shopBestsellersData.push({
    id: i,
    image: getRandomImage(i + totalShopBestsellers),
    title: "Graphic Design",
    description: "Product description goes here. Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    oldPrice: "$69.99",
    newPrice: "$49.99",
    rating: getRandomRating(i + totalShopBestsellers), // Rastgele bir rating ekleniyor (0.1 - 5.0 arasında)
  });
}


// Her kategori için veri setini oluştur
// Güncellenmiş veri setleri (price ve oldPrice değerleri için)
const shopBestsellersElbiseData = Array.from({ length: imagesElbise.length }, (_, i) => {
  const price = getRandomPrice(i + 501);
  return {
    id: i + 501,
    image: getRandomImageByCategory("elbise", i + 501),
    title: "Elbise",
    description: "Elbise için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`, // oldPrice, price + 20 olacak
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i + 501),
  };
});

const shopBestsellersCantaData = Array.from({ length: imagesCanta.length }, (_, i) => {
  const price = getRandomPrice(i + 601);
  return {
    id: i + 601,
    image: getRandomImageByCategory("canta", i + 601),
    title: "Çanta",
    description: "Çanta için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i + 601),
  };
});

const shopBestsellersTisortData = Array.from({ length: imagesTisort.length }, (_, i) => {
  const price = getRandomPrice(i + 701);
  return {
    id: i + 701,
    image: getRandomImageByCategory("tisort", i + 701),
    title: "Tişört",
    description: "Tişört için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i + 701),
  };
});

const shopBestsellersPantalonData = Array.from({ length: imagesPantalon.length }, (_, i) => {
  const price = getRandomPrice(i + 801);
  return {
    id: i + 801,
    image: getRandomImageByCategory("pantalon", i + 801),
    title: "Pantolon",
    description: "Pantolon için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i + 801),
  };
});

// Diğer sabit veriler
const teamData = [
  {
    id: 1,
    image: team01,
    name: 'John Doe',
    status: 'Frontend Developer',
    instagram: 'https://instagram.com/johndoe',
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    id: 2,
    image: team02,
    name: 'Jane Smith',
    status: 'Backend Developer',
    instagram: 'https://instagram.com/janesmith',
    github: 'https://github.com/janesmith',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    id: 3,
    image: team03,
    name: 'Alex Johnson',
    status: 'UI/UX Designer',
    instagram: 'https://instagram.com/alexjohnson',
    github: 'https://github.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson',
  },
  {
    id: 4,
    image: team04,
    name: 'David Jonah',
    status: 'Frontend Developer',
    instagram: 'https://instagram.com/davidjonah',
    github: 'https://github.com/davidjonah',
    linkedin: 'https://linkedin.com/in/davidjonah',
  },
  {
    id: 5,
    image: team05,
    name: 'David Jonah',
    status: 'Frontend Developer',
    instagram: 'https://instagram.com/davidjonah',
    github: 'https://github.com/davidjonah',
    linkedin: 'https://linkedin.com/in/davidjonah',
  },
];

const pricingData = [
  {
    title: 'FREE',
    price: '$0',
    frequency: 'Per Month',
    features: [
      { text: 'Unlimited product updates', included: true },
      { text: '1GB Cloud storage', included: false },
      { text: 'Email and community support', included: false },
    ],
    isNew: false,
  },
  {
    title: 'Silver',
    price: '$9.99',
    frequency: 'Per Month',
    features: [
      { text: 'Unlimited product updates', included: true },
      { text: '1GB Cloud storage', included: true },
      { text: 'Email and community support', included: true },
    ],
    isNew: true,
  },
  {
    title: 'Gold',
    price: '$19.99',
    frequency: 'Per Month',
    features: [
      { text: 'Unlimited product updates', included: true },
      { text: '1GB Cloud storage', included: true },
      { text: 'Email and community support', included: true },
    ],
    isNew: false,
  },
];

export { 
  bestsellersData, 
  shopBestsellersData, 
  shopBestsellersElbiseData, 
  shopBestsellersCantaData, 
  shopBestsellersTisortData, 
  shopBestsellersPantalonData,
  teamData,
  pricingData 
};
