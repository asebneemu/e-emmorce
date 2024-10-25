import resim from "../../assets/pictures/ucbir.png";

export default function TwoColumnSection() {
    return (
        <div className="w-full flex my-20">
            {/* Soldaki yüzde 60'lık alan */}
            <div className="3xs:w-full md:w-[60%] flex md:justify-start items-center p-8 bg-blue-400 3xs:mx-auto">
                {/* Ortalanan yüzde 40'lık iç div */}
                <div className="w-[40%] mx-auto flex flex-col items-start gap-10 my-5">
                    <p className="text-lg mb-6">Work With Us</p>
                    <h1 className="md:text-6xl font-bold mb-4 3xs:text-4xl">Welcome to Our Company</h1>
                    <p className="text-lg mb-6">
                        We provide the best solutions to boost your business and increase your productivity.
                    </p>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-xl">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Sağdaki yüzde 40'lık resim alanı */}
            <div className="w-[40%] 3xs:hidden md:block">
                {/* Resim arka plan olarak ayarlanıyor */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${resim})` }}>
                    {/* Resim cover modunda burada yer alıyor */}
                </div>
            </div>
        </div>
    );
}
