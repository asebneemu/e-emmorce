import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import resimBir from "../assets/pictures/logo.png"

// Özelleştirilmiş sol ve sağ oklar
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute right-0 top-[50%] translate-y-[-50%] z-50" onClick={onClick}>
            <FaArrowRight className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer" />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute left-0 top-[50%] translate-y-[-50%] z-50" onClick={onClick}>
            <FaArrowLeft className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer" />
        </div>
    );
}

export default function Header() {
    // Slider ayarları
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,  // Oklar aktif
        nextArrow: <NextArrow />,  // Özelleştirilmiş sağ ok
        prevArrow: <PrevArrow />   // Özelleştirilmiş sol ok
    };

    const sliderContent = [
        {
            title: "NEW COLLECTION",
            subtitle: "SUMMER 2022",
            description: "We know how large objects will act, but things on a small scale.",
            image: resimBir,
            backgroundColor: "bg-gradient-to-r from-yellow-200 to-orange-200"  // Sarı arkaplan
        },
        {
            title: "WINTER SALE",
            subtitle: "WINTER 2022",
            description: "Get ready for winter with our brand new collection.",
            image: resimBir,
            backgroundColor: "bg-gradient-to-r from-blue-200 to-purple-200"  // Mavi arkaplan
        },
        {
            title: "AUTUMN VIBES",
            subtitle: "AUTUMN 2022",
            description: "Feel the autumn vibes with our latest designs.",
            image: resimBir,
            backgroundColor: "bg-gradient-to-r from-green-200 to-teal-200"  // Yeşil arkaplan
        },
    ];

    return (
        <div className="flex justify-center items-center h-auto min-h-screen my-10">
            {/* %95 genişlik ve otomatik height ile iç div */}
            <div className="w-[95%] h-auto rounded-lg relative overflow-hidden">
                <Slider {...settings}>
                    {sliderContent.map((content, index) => (
                        <div key={index}>
                            <div className={`w-full h-auto ${content.backgroundColor} p-10 rounded-lg`}>
                                <div className="w-full mt-[30%] md:mt-10 md:mb-10 mb-[20%] flex md:flex-row flex-col items-center text-center md:text-left gap-16 px-10 relative z-20">
                                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10">
                                        <h3 className="text-xl font-semibold text-[#2A7CC7]" style={{ fontWeight: 700 }}>{content.subtitle}</h3>
                                        <h1 className="text-6xl font-bold">{content.title}</h1>
                                        <p className="text-3xl mt-4 text-gray-700">
                                            {content.description}
                                        </p>
                                        <Link to="/shop-page">
                                            <button className="text-3xl font-bold w-[220px] h-[60px] mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                SHOP NOW
                                            </button>
                                        </Link>
                                    </div>

                                    {/* Yeni eklenen div */}
                                    <div className="w-full md:w-1/2 relative flex justify-center items-center">
                                        <div className="w-[95%] aspect-square bg-white rounded-full flex justify-center items-center">
                                            {/* Çemberin içinde yer alan içerik buraya eklenebilir */}
                                        </div>

                                        {/* Resim */}
                                        <div className="absolute bottom-0 right-0 w-full h-auto z-30 left-0 transform scale-135 -translate-x-5 md:translate-x-10">
                                            <img src={content.image} alt="Your Image" className="w-full h-auto object-cover" />
                                        </div>

                                        {/* ilk Çember */}
                                        <div className="absolute bottom-[220px] right-10 w-6 h-6 bg-white rounded-full z-40">
                                            {/* 6px yarıçapında beyaz çember */}
                                        </div>

                                        {/* İkinci çember */}
                                        <div className="absolute bottom-[400px] right-5 w-3 h-3 bg-purple-500 rounded-full z-40">
                                            {/* 3px yarıçapında mor çember */}
                                        </div>

                                        {/* Üçüncü çember */}
                                        <div className="absolute 4xs:bottom-[400px] bottom-[600px] left-0 w-20 h-20 bg-white rounded-full z-40">
                                            {/* 10px yarıçapında beyaz çember */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
