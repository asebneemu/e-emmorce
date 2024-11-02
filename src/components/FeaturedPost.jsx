import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faEye, faStar, faDownload } from '@fortawesome/free-solid-svg-icons';

const FeaturedPost = ({ image, title, description, oldPrice, newPrice, rating, sales }) => {
    return (
        <div className="relative flex flex-col md:flex-row gap-6 border border-gray-300 rounded-md w-full 3xs:pb-5 md:pb-0 3xs:pr-5">
            <div className="relative w-full md:w-1/3 h-[300px] md:h-[400px] overflow-hidden m-0 p-0">
                <img src={image} alt="Post" className="w-full h-full object-cover m-0 p-0" />

                <div className="absolute top-2 left-2">
                    <div className="block md:hidden bg-red-500 text-white text-sm px-2 py-1 rounded">New</div>
                    <div className="hidden md:block bg-green-500 text-white text-sm px-2 py-1 rounded">Sale</div>
                </div>

                <div className="hidden md:flex absolute bottom-4 left-0 right-0 justify-center gap-2 px-2">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                        <FontAwesomeIcon icon={farHeart} className="text-gray-800" /> {/* İçi boş kalp ikonu */}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-gray-800" /> {/* Dolu alışveriş sepeti ikonu */}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                        <FontAwesomeIcon icon={faEye} className="text-gray-800" /> {/* İçi boş göz ikonu */}
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col gap-4 w-full md:w-[60%] md:justify-center">
                <div className="hidden md:flex items-center justify-center absolute top-2 right-2 bg-blue-900 text-white rounded-full py-1 px-2 text-sm">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> {/* Sarı yıldız ikonu */}
                    <span className="ml-1">{rating}</span> {/* Random rating */}
                </div>

                <h2 className="3xs:text-sm md:text-2xl font-semibold pl-4 text-left">{title}</h2>
                <p className="3xs:text-sm md:text-base pl-4 text-left">{description}</p>

                <div className="hidden md:flex items-center gap-2 pl-4 mt-1">
                    <FontAwesomeIcon icon={faDownload} className="text-blue-500" /> {/* İndirme ikonu */}
                    <span>{sales} Sales</span> {/* Rastgele sales */}
                </div>

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

                <div className="mt-4 flex items-center gap-2 pl-4">
                    <button className="3xs:text-sm lg:text-lg text-blue-500 border border-blue-500 rounded-full px-4 py-2 flex items-center gap-2 md:text-blue-500 md:border-blue-500 md:rounded-full">
                        Learn More <span className="3xs:text-sm lg:text-xl text-blue-500 font-bold">{'>'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;
