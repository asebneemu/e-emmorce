import c1 from "./assets/pictures/bestsellers/c1.jpeg";
import c2 from "./assets/pictures/bestsellers/c2.jpeg";
import c3 from "./assets/pictures/bestsellers/c3.jpeg";
import c4 from "./assets/pictures/bestsellers/c4.jpeg";
import c5 from "./assets/pictures/bestsellers/c5.jpeg";
import c6 from "./assets/pictures/bestsellers/c6.jpeg";
import c7 from "./assets/pictures/bestsellers/c7.jpeg";
import c8 from "./assets/pictures/bestsellers/c8.jpeg";
import c9 from "./assets/pictures/bestsellers/c9.jpeg";
import c10 from "./assets/pictures/bestsellers/c10.jpeg";
import c11 from "./assets/pictures/bestsellers/c11.jpeg";
import c12 from "./assets/pictures/bestsellers/c12.jpeg";
import c13 from "./assets/pictures/bestsellers/c13.jpeg";
import c14 from "./assets/pictures/bestsellers/c14.jpeg";
import c15 from "./assets/pictures/bestsellers/c15.jpeg";
import c16 from "./assets/pictures/bestsellers/c16.jpeg";
import c17 from "./assets/pictures/bestsellers/c17.jpeg";
import c18 from "./assets/pictures/bestsellers/c18.jpeg";
import c19 from "./assets/pictures/bestsellers/c19.jpeg";
import c20 from "./assets/pictures/bestsellers/c20.jpeg";

import team01 from "./assets/team/team1.jfif";
import team02 from "./assets/team/team2.jfif";
import team03 from "./assets/team/team3.jfif";

const images = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
  c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
];

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

// Rastgele bir rating değeri oluşturma fonksiyonu (0.1 ile 5.0 arasında olacak şekilde)
const getRandomRating = (id) => {
  const key = `product_rating_${id}`;
  const savedRating = localStorage.getItem(key);

  if (savedRating) {
    return parseFloat(savedRating);
  } else {
    const randomRating = (Math.random() * (5 - 0.1) + 0.1).toFixed(1); // 0.1 ile 5.0 arasında
    localStorage.setItem(key, randomRating);
    return parseFloat(randomRating);
  }
};

// Veri seti
const totalBestsellers = 70;
const bestsellersData = [];

for (let i = 1; i <= totalBestsellers; i++) {
  bestsellersData.push({
    id: i,
    image: getRandomImage(i),
    title: "Graphic Design",
    description: "Product description goes here.",
    oldPrice: "$69.99",
    newPrice: "$49.99",
  });
}

const totalShopBestsellers = 70;
const shopBestsellersData = [];

for (let i = 1; i <= totalShopBestsellers; i++) {
  shopBestsellersData.push({
    id: i,
    image: getRandomImage(i + totalBestsellers),
    title: "Graphic Design",
    description: "Product description goes here. Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    oldPrice: "$69.99",
    newPrice: "$49.99",
    rating: getRandomRating(i + totalBestsellers), // Rastgele bir rating ekleniyor (0.1 - 5.0 arasında)
  });
}

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

export { bestsellersData, shopBestsellersData, teamData, pricingData };
