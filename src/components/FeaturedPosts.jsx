/* eslint-disable react/no-unescaped-entities */
import resimBir from "../assets/pictures/featuredposts/post1.jfif";
import resimIki from "../assets/pictures/featuredposts/post2.jfif";
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome CSS dosyasını ekliyoruz

const FeaturedPosts = () => {
  // 4 ile 5 arasında random bir sayı oluştur
  const generateRandomRating = () => {
    return (Math.random() * (5 - 4) + 4).toFixed(1);
  };

  // 1 ile 20 arasında random bir sales sayısı oluştur
  const generateRandomSales = () => {
    return Math.floor(Math.random() * 20) + 1;
  };

  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* Başlık */}
      <h1 className="text-4xl font-bold text-center mb-8">Featured Posts</h1>

      {/* İkili Divler */}
      <div className="flex flex-col items-center gap-8 w-[70%] md:flex-row md:gap-14">
        
        {/* İlk Post */}
        <div className="relative flex flex-col md:flex-row gap-6 border border-gray-300 rounded-md w-full">
          {/* Resim */}
          <div className="relative w-full md:w-1/3 h-[300px] md:h-[400px] overflow-hidden m-0 p-0">
            <img src={resimBir} alt="Post 1" className="w-[100%] h-full object-cover m-0 p-0" />
            
            {/* "New" ve "Sale" Divleri */}
            <div className="absolute top-2 left-2">
              <div className="block md:hidden bg-red-500 text-white text-sm px-2 py-1 rounded">New</div>
              <div className="hidden md:block bg-green-500 text-white text-sm px-2 py-1 rounded">Sale</div>
            </div>

            {/* İkonlar İçin Div */}
            <div className="hidden md:flex absolute bottom-4 left-0 right-0 justify-center gap-2 px-2">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <i className="far fa-heart text-gray-800"></i> {/* İçi boş kalp ikonu */}
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <i className="fas fa-shopping-cart text-gray-800"></i> {/* Dolu alışveriş sepeti ikonu */}
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <i className="far fa-eye text-gray-800"></i> {/* İçi boş göz ikonu */}
              </div>
            </div>
          </div>

          {/* İçerik Divi */}
          <div className="relative flex flex-col gap-4 w-full md:w-[60%] md:justify-center">
            {/* Sağ Üst Yıldızlı Rating Divi */}
            <div className="hidden md:flex items-center justify-center absolute top-2 right-2 bg-blue-900 text-white rounded-full py-1 px-2 text-sm">
              <i className="fas fa-star text-yellow-400"></i> {/* Sarı yıldız ikonu */}
              <span className="ml-1">{generateRandomRating()}</span> {/* Random rating */}
            </div>

            {/* Butonlar - md'nin altındaki ekranlar için */}
            <div className="flex gap-2 pl-4 md:hidden"> {/* md ve üstü için gizli */}
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Google</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Trending</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">New</button>
            </div>

            {/* Başlık ve Paragraf */}
            <h2 className="text-2xl font-semibold pl-4 text-left">Loudest à la Madison #1 (L'integral)</h2>
            <p className="text-base pl-4 text-left">
              We focus on ergonomics and meeting
              you where you work. It's only a
              keystroke away.
            </p>

            {/* Sales Div - Paragrafın hemen altında, md ve üzeri için */}
            <div className="hidden md:flex items-center gap-2 pl-4 mt-1"> {/* md ve üstü ekranlarda görünür */}
              <i className="fas fa-download text-blue-500"></i> {/* İndirme ikonu */}
              <span>{generateRandomSales()} Sales</span> {/* Rastgele sales */}
            </div>

            {/* İki Div (İkon ve Yazı) */}
            <div className="flex justify-between gap-6 px-4 pr-[6%]">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <p>Date</p>
              </div>
              <div className="flex items-center gap-2">
                <span>🕒</span>
                <p>Read Time</p>
              </div>
            </div>

            {/* Learn More Butonu - md ve üzeri için özel stil */}
            <div className="mt-4 flex items-center gap-2 pl-4">
              <button className="text-lg text-blue-500 border border-blue-500 rounded-full px-4 py-2 flex items-center gap-2 md:text-blue-500 md:border-blue-500 md:rounded-full">
                Learn More <span className="text-xl text-blue-500 font-bold">{'>'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* İkinci Post */}
        <div className="relative flex flex-col md:flex-row gap-6 border border-gray-300 rounded-md w-full">
          {/* Resim */}
          <div className="relative w-full md:w-1/3 h-[300px] md:h-[400px] overflow-hidden m-0 p-0">
            <img src={resimIki} alt="Post 2" className="w-full h-full object-cover m-0 p-0" />
            
            {/* "New" ve "Sale" Divleri */}
            <div className="absolute top-2 left-2">
              <div className="block md:hidden bg-red-500 text-white text-sm px-2 py-1 rounded">New</div>
              <div className="hidden md:block bg-green-500 text-white text-sm px-2 py-1 rounded">Sale</div>
            </div>

            {/* İkonlar İçin Div */}
            <div className="hidden md:flex absolute bottom-4 left-0 right-0 justify-center gap-2 px-2">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <i className="far fa-heart text-gray-800"></i> {/* İçi boş kalp ikonu */}
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <i className="fas fa-shopping-cart text-gray-800"></i> {/* Dolu alışveriş sepeti ikonu */}
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                <i className="far fa-eye text-gray-800"></i> {/* İçi boş göz ikonu */}
              </div>
            </div>
          </div>

          {/* İçerik Divi */}
          <div className="relative flex flex-col gap-4 w-full md:w-[60%] md:justify-center">
            {/* Sağ Üst Yıldızlı Rating Divi */}
            <div className="hidden md:flex items-center justify-center absolute top-2 right-2 bg-blue-900 text-white rounded-full py-1 px-2 text-sm">
              <i className="fas fa-star text-yellow-400"></i> {/* Sarı yıldız ikonu */}
              <span className="ml-1">{generateRandomRating()}</span> {/* Random rating */}
            </div>

            {/* Butonlar - md'nin altındaki ekranlar için */}
            <div className="flex gap-2 pl-4 md:hidden"> {/* md ve üstü için gizli */}
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Google</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Trending</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">New</button>
            </div>

            {/* Başlık ve Paragraf */}
            <h2 className="text-2xl font-semibold pl-4 text-left">Loudest à la Madison #1 (L'integral)</h2>
            <p className="text-base pl-4 text-left">
              We focus on ergonomics and meeting
              you where you work. It's only a
              keystroke away.
            </p>

            {/* Sales Div - Paragrafın hemen altında, md ve üzeri için */}
            <div className="hidden md:flex items-center gap-2 pl-4 mt-1"> {/* md ve üstü ekranlarda görünür */}
              <i className="fas fa-download text-blue-500"></i> {/* İndirme ikonu */}
              <span>{generateRandomSales()} Sales</span> {/* Rastgele sales */}
            </div>

            {/* İki Div (İkon ve Yazı) */}
            <div className="flex justify-between gap-6 px-4 pr-[6%]">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <p>Date</p>
              </div>
              <div className="flex items-center gap-2">
                <span>🕒</span>
                <p>Read Time</p>
              </div>
            </div>

            {/* Learn More Butonu - md ve üzeri için özel stil */}
            <div className="mt-4 flex items-center gap-2 pl-4">
              <button className="text-lg text-blue-500 border border-blue-500 rounded-full px-4 py-2 flex items-center gap-2 md:text-blue-500 md:border-blue-500 md:rounded-full">
                Learn More <span className="text-xl text-blue-500 font-bold">{'>'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
