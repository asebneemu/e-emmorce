import resimBir from "../assets/pictures/featuredposts/post1.jfif";
import resimIki from "../assets/pictures/featuredposts/post2.jfif";

const FeaturedPosts = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* Başlık */}
      <h1 className="text-4xl font-bold text-center mb-8">Featured Posts</h1>

      {/* İkili Divler */}
      <div className="flex flex-col items-center gap-8 w-[80%]">
        {/* İlk Post */}
        <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-300 rounded-md w-full">
          {/* Resim */}
          <div className="relative w-full md:w-1/3 h-[300px] overflow-hidden m-0 p-0">
            <img src={resimBir} alt="Post 1" className="w-full h-full object-cover m-0 p-0" />
          </div>

          {/* İçerik Divi */}
          <div className="flex flex-col gap-4 w-full">
            {/* Butonlar */}
            <div className="flex gap-2 pl-4">
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Google</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Trending</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">New</button>
            </div>

            {/* Başlık ve Paragraf */}
            <h2 className="text-2xl font-semibold pl-4">Post Title 1</h2>
            <p className="text-base pl-4">
              This is a brief description of the post. It gives an overview of the content.
            </p>

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

            {/* Learn More Butonu */}
            <div className="mt-4 flex items-center gap-2 pl-4">
              <button className="text-blue-500 font-semibold">Learn More</button>
              <span className="text-blue-500">{'>'}</span>
            </div>
          </div>
        </div>

        {/* İkinci Post */}
        <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-300 rounded-md w-full">
          {/* Resim */}
          <div className="relative w-full md:w-1/3 h-[300px] overflow-hidden m-0 p-0">
            <img src={resimIki} alt="Post 2" className="w-full h-full object-cover m-0 p-0" />
          </div>

          {/* İçerik Divi */}
          <div className="flex flex-col gap-4 w-full">
            {/* Butonlar */}
            <div className="flex gap-2 pl-4">
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Google</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">Trending</button>
              <button className="bg-transparent text-black border border-black px-4 py-2 hover:bg-blue-500 hover:text-white transition">New</button>
            </div>

            {/* Başlık ve Paragraf */}
            <h2 className="text-2xl font-semibold pl-4">Post Title 2</h2>
            <p className="text-base pl-4">
              This is a brief description of the post. It gives an overview of the content.
            </p>

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

            {/* Learn More Butonu */}
            <div className="mt-4 flex items-center gap-2 pl-4">
              <button className="text-blue-500 font-semibold">Learn More</button>
              <span className="text-blue-500">{'>'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
