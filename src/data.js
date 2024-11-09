/* eslint-disable no-unused-vars */
 
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

// Etek resimleri
import etek1 from "./assets/pictures/bestsellers/e1.jpg"
import etek2 from "./assets/pictures/bestsellers/e2.jpg"
import etek3 from "./assets/pictures/bestsellers/e3.jpg"
import etek4 from "./assets/pictures/bestsellers/e4.jpg"
import etek5 from "./assets/pictures/bestsellers/e5.jpg"
import etek6 from "./assets/pictures/bestsellers/e6.jpg"
import etek7 from "./assets/pictures/bestsellers/e7.jpg"
import etek8 from "./assets/pictures/bestsellers/e8.jpg"

const imagesEtek = [etek1,etek2,etek3,etek4,etek5,etek6,etek7,etek8]

// Çanta resimleri
import c1 from "./assets/pictures/bestsellers/canta1.jpg";
import c2 from "./assets/pictures/bestsellers/canta2.jpg";
import c3 from "./assets/pictures/bestsellers/canta3.jpg";
import c4 from "./assets/pictures/bestsellers/canta4.jpg";
import c5 from "./assets/pictures/bestsellers/canta5.jpg";


const imagesCanta = [c1, c2, c3, c4, c5];

// Takı resimler
import tt1 from "./assets/pictures/bestsellers/takı1.jpg"
import tt2 from "./assets/pictures/bestsellers/takı2.jpg"
import tt3 from "./assets/pictures/bestsellers/takı3.jpg"
import tt4 from "./assets/pictures/bestsellers/takı4.jpg"
import tt5 from "./assets/pictures/bestsellers/takı5.jpg"
import tt6 from "./assets/pictures/bestsellers/takı6.jpg"

const imagesTaki = [tt1,tt2,tt3,tt4,tt5,tt6]

// İç Giyim resimler
import ic1 from "./assets/pictures/bestsellers/ic1.jpg"
import ic2 from "./assets/pictures/bestsellers/ic2.jpg"
import ic3 from "./assets/pictures/bestsellers/ic3.jpg"
import ic4 from "./assets/pictures/bestsellers/ic4.jpg"
import ic5 from "./assets/pictures/bestsellers/ic5.jpg"

const imagesIcGiyim = [ic1,ic2,ic3,ic4,ic5]

// Ayakkabı resimler
import sh1 from "./assets/pictures/bestsellers/sh1.jpg"
import sh2 from "./assets/pictures/bestsellers/sh2.jpg"
import sh3 from "./assets/pictures/bestsellers/sh3.jpg"
import sh4 from "./assets/pictures/bestsellers/sh4.jpg"

const imagesShoe = [sh1,sh2,sh3,sh4]


// Tişört resimleri
import ti1 from "./assets/pictures/bestsellers/tisort1.jpg";
import ti2 from "./assets/pictures/bestsellers/tisort2.jpg";
import ti3 from "./assets/pictures/bestsellers/tisort3.jpg";
import ti4 from "./assets/pictures/bestsellers/tisort4.jpg";

const imagesTisort = [ti1, ti2, ti3, ti4];

// Pantolon resimleri
import p1 from "./assets/pictures/bestsellers/pantalon1.jpg";
import p2 from "./assets/pictures/bestsellers/pantalon2.jpg";
import p3 from "./assets/pictures/bestsellers/pantalon3.jpg";
import p4 from "./assets/pictures/bestsellers/pantalon4.jpg";
import p5 from "./assets/pictures/bestsellers/pantalon5.jpg";

const imagesPantalon = [p1, p2, p3, p4, p5];

// Ceket kategorisi resimleri
import cc1 from "./assets/pictures/bestsellers/ceket1.jpg";
import cc2 from "./assets/pictures/bestsellers/ceket2.jpg";
import cc3 from "./assets/pictures/bestsellers/ceket3.jpg";
import cc4 from "./assets/pictures/bestsellers/ceket4.jpg";
import cc5 from "./assets/pictures/bestsellers/ceket5.jpg";

const imagesCeket = [cc1, cc2, cc3, cc4, cc5];

// Gömlek kategorisi resimleri
import g1 from "./assets/pictures/bestsellers/gomlek1.jpg";
import g2 from "./assets/pictures/bestsellers/gomlek2.jpg";
import g3 from "./assets/pictures/bestsellers/gomlek3.jpg";
import g4 from "./assets/pictures/bestsellers/gomlek4.jpg";
import g5 from "./assets/pictures/bestsellers/gomlek5.jpg";

const imagesGomlek = [g1, g2, g3, g4, g5];

// Takım kategorisi resimleri
import t1 from "./assets/pictures/bestsellers/takim1.jpg";
import t2 from "./assets/pictures/bestsellers/takim2.jpg";
import t3 from "./assets/pictures/bestsellers/takim3.jpg";
import t4 from "./assets/pictures/bestsellers/takim4.jpg";
import t5 from "./assets/pictures/bestsellers/takim5.jpg";

const imagesTakim = [t1, t2, t3, t4, t5];

// Kazak kategorisi resimleri
import ka1 from "./assets/pictures/bestsellers/kazak1.jpg";
import ka2 from "./assets/pictures/bestsellers/kazak2.jpg";
import ka3 from "./assets/pictures/bestsellers/kazak3.jpg";
import ka4 from "./assets/pictures/bestsellers/kazak4.jpg";
import ka5 from "./assets/pictures/bestsellers/kazak5.jpg";

const imagesKazak = [ka1, ka2, ka3, ka4, ka5];

// Ayakkabı kategorisi resimleri (erkek)
import a1 from "./assets/pictures/bestsellers/ayakkabi1.jpg";
import a2 from "./assets/pictures/bestsellers/ayakkabi2.jpg";
import a3 from "./assets/pictures/bestsellers/ayakkabi3.jpg";
import a4 from "./assets/pictures/bestsellers/ayakkabi4.jpg";
import a5 from "./assets/pictures/bestsellers/ayakkabi5.jpg";

const imagesErkekShoe = [a1, a2, a3, a4, a5];

const rastgeleImages = [
  imagesElbise[Math.floor(Math.random() * imagesElbise.length)],
  imagesEtek[Math.floor(Math.random() * imagesEtek.length)],
  imagesCanta[Math.floor(Math.random() * imagesCanta.length)],
  imagesTaki[Math.floor(Math.random() * imagesTaki.length)],
  imagesIcGiyim[Math.floor(Math.random() * imagesIcGiyim.length)],
  imagesShoe[Math.floor(Math.random() * imagesShoe.length)],
  imagesTisort[Math.floor(Math.random() * imagesTisort.length)],
  imagesPantalon[Math.floor(Math.random() * imagesPantalon.length)],
  imagesCeket[Math.floor(Math.random() * imagesCeket.length)],
  imagesGomlek[Math.floor(Math.random() * imagesGomlek.length)],
  imagesTakim[Math.floor(Math.random() * imagesTakim.length)],
  imagesKazak[Math.floor(Math.random() * imagesKazak.length)],
  imagesErkekShoe[Math.floor(Math.random() * imagesErkekShoe.length)]
];



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
const getRandomImageByCategory = (gender, category, id) => {
  let images = [];

  if (gender === "kadın") {
    // Kadın kategorileri
    switch (category) {
      case "etek":
        images = imagesEtek;
        break;
      case "elbise":
        images = imagesElbise;
        break;
      case "canta":
        images = imagesCanta;
        break;
      case "taki":
        images = imagesTaki;
        break;
      case "icgiyim":
        images = imagesIcGiyim;
        break;
      case "ayakkabi":
        images = imagesShoe;
        break;
      case "tisort":
        images = imagesTisort;
        break;
      case "pantalon":
        images = imagesPantalon;
        break;
      default:
        images = imagesElbise; // Varsayılan kategori elbise
    }
  } else if (gender === "erkek") {
    // Erkek kategorileri
    switch (category) {
      case "ceket":
        images = imagesCeket;
        break;
      case "gomlek":
        images = imagesGomlek;
        break;
      case "takim":
        images = imagesTakim;
        break;
      case "kazak":
        images = imagesKazak;
        break;
      case "ayakkabi":
        images = imagesErkekShoe;
        break;
      default:
        images = imagesCeket; // Varsayılan kategori ceket
    }
  }

  // Rastgele bir resim seçmek için
  return images.length ? images[Math.floor(Math.random() * images.length)] : null;
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
    title: "Shop Design",
    description: "Product description goes here. Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    oldPrice: "$69.99",
    newPrice: "$49.99",
    rating: getRandomRating(i + totalShopBestsellers), // Rastgele bir rating ekleniyor (0.1 - 5.0 arasında)
  });
}

const rastgeleData = rastgeleImages.map((image, index) => {
  const price = getRandomPrice(index);
  return {
    id: index + 1,
    image,
    title: "Random Product",
    description: "Bu ürün rastgele seçilmiştir.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(index),
  };
});

// KADIN BÖLÜMÜ

// Her kategori için veri setini oluştur
// Güncellenmiş veri setleri (price ve oldPrice değerleri için)
// Kadın kategorisi için veriler
const shopBestsellersEtekData = Array.from({ length: 25 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `etek-${i}`,
    image: getRandomImageByCategory("kadın", "etek", i),
    title: "Etek",
    description: "Etek için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersElbiseData = Array.from({ length: 25 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `elbise-${i}`,
    image: getRandomImageByCategory("kadın", "elbise", i),
    title: "Elbise",
    description: "Elbise için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersCantaData = Array.from({ length: 40 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `canta-${i}`,
    image: getRandomImageByCategory("kadın", "canta", i),
    title: "Çanta",
    description: "Çanta için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersTakiData = Array.from({ length: 40 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `taki-${i}`,
    image: getRandomImageByCategory("kadın", "taki", i),
    title: "Takı",
    description: "Takı için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersIcGiyimData = Array.from({ length: 40 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `icgiyim-${i}`,
    image: getRandomImageByCategory("kadın", "icgiyim", i),
    title: "İç Giyim",
    description: "İç Giyim için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersAyakkabiData = Array.from({ length: 40 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `kayakkabi-${i}`,
    image: getRandomImageByCategory("kadın", "ayakkabi", i),
    title: "Ayakkabı",
    description: "Ayakkabı için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersTisortData = Array.from({ length: 20 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `tisort-${i}`,
    image: getRandomImageByCategory("kadın", "tisort", i),
    title: "Tişört",
    description: "Tişört için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersPantalonData = Array.from({ length: 15 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `pantalon-${i}`,
    image: getRandomImageByCategory("kadın", "pantalon", i),
    title: "Pantolon",
    description: "Pantolon için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

// Erkek kategorisi için veriler
const shopBestsellersCeketData = Array.from({ length: 20 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `ceket-${i}`,
    image: getRandomImageByCategory("erkek", "ceket", i),
    title: "Ceket",
    description: "Ceket için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersGomlekData = Array.from({ length: 20 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `gomlek-${i}`,
    image: getRandomImageByCategory("erkek", "gomlek", i),
    title: "Gömlek",
    description: "Gömlek için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersTakimData = Array.from({ length: 20 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `takim-${i}`,
    image: getRandomImageByCategory("erkek", "takim", i),
    title: "Takım",
    description: "Takım için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersKazakData = Array.from({ length: 20 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `kazak-${i}`,
    image: getRandomImageByCategory("erkek", "kazak", i),
    title: "Kazak",
    description: "Kazak için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
  };
});

const shopBestsellersErkekAyakkabiData = Array.from({ length: 20 }, (_, i) => {
  const price = getRandomPrice(i);
  return {
    id: `eayakkabi-${i}`,
    image: getRandomImageByCategory("erkek", "ayakkabi", i),
    title: "Ayakkabı",
    description: "Erkek Ayakkabı için açıklama.",
    oldPrice: `$${(price + 20).toFixed(2)}`,
    newPrice: `$${price.toFixed(2)}`,
    rating: getRandomRating(i),
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
  shopBestsellersEtekData,
  shopBestsellersElbiseData,
  shopBestsellersCantaData,
  shopBestsellersTakiData,
  shopBestsellersIcGiyimData,
  shopBestsellersAyakkabiData,
  shopBestsellersTisortData,
  shopBestsellersPantalonData,

  shopBestsellersCeketData,
  shopBestsellersGomlekData,
  shopBestsellersTakimData,
  shopBestsellersKazakData,
  shopBestsellersErkekAyakkabiData,

  rastgeleData,
  teamData,
  pricingData 
};
