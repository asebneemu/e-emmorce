/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FavoriteButton from '@/components/Buttons/FavoriteButton';
import AddToCartButton from '@/components/Buttons/AddToCartButton';
import StarRating from '@/components/Buttons/StarRating';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute right-0 top-[50%] translate-y-[-50%] z-50" onClick={onClick}>
            <FaArrowRight className="text-2xl text-white cursor-pointer" style={{ strokeWidth: 0.5 }} />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute left-0 top-[50%] translate-y-[-50%] z-50" onClick={onClick}>
            <FaArrowLeft className="text-2xl text-white cursor-pointer" style={{ strokeWidth: 0.5 }} />
        </div>
    );
}

export default function Product({ product }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(false);

    if (!product) {
        return <p>Ürün bulunamadı.</p>;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: false,
        beforeChange: (_, next) => setCurrentImage(next),
    };

    const handleThumbnailClick = (index) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImage(index);
            setIsFading(false);
        }, 200);
    };

    return (
        <div className="w-[90%] mx-auto flex items-start p-8 my-10">
            <div className="w-[50%] h-[45%]" style={{ maxWidth: '500px', maxHeight: '450px' }}>
                <Slider {...settings}>
                    {[product.image, product.image].map((img, index) => (
                        <div key={index}>
                            <img
                                src={img}
                                alt={product.title}
                                className={`w-full h-full object-cover transition-opacity duration-200 ${
                                    isFading ? 'opacity-0' : 'opacity-100'
                                }`}
                                style={{ maxWidth: '500px', maxHeight: '450px' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="flex space-x-4 mt-4">
                    {[product.image, product.image].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${product.title} thumbnail`}
                            className="w-16 h-16 object-cover cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200"
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="ml-8 text-left self-start w-[40%]">
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                
                {/* StarRating Bileşeni */}
                <div className="mb-2">
                    <StarRating rating={product.rating} />
                </div>

                <p className="text-xl font-bold text-blue-500 mb-2">{product.newPrice}</p>
                <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>

                {/* Favori ve Sepete Ekle Butonları */}
                <div className="flex items-center gap-x-4 mt-4">
                    <FavoriteButton product={product} />
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    );
}
