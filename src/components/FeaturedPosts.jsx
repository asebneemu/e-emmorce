// FeaturedPosts.jsx
import FeaturedPost from "./FeaturedPost"; // Yeni bileşeni import ettik
import resimBir from "../assets/pictures/featuredposts/post1.jfif";
import resimIki from "../assets/pictures/featuredposts/post2.jfif";

const FeaturedPosts = () => {
    const generateRandomRating = () => {
        return (Math.random() * (5 - 4) + 4).toFixed(1);
    };

    const generateRandomSales = () => {
        return Math.floor(Math.random() * 20) + 1;
    };

    return (
        <div className="w-full py-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-8">Featured Posts</h1>
            <div className="flex flex-col items-center gap-8 w-[70%] md:flex-row md:gap-14">
                {/* İlk Post */}
                <FeaturedPost 
                    image={resimBir} 
                    title="Loudest à la Madison #1 (L'integral)"
                    description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                    oldPrice="$29.99"
                    newPrice="$19.99"
                    rating={generateRandomRating()}
                    sales={generateRandomSales()}
                />
                {/* İkinci Post */}
                <FeaturedPost 
                    image={resimIki} 
                    title="Loudest à la Madison #2 (L'integral)"
                    description="Discover our collection that meets both form and function."
                    oldPrice="$39.99"
                    newPrice="$29.99"
                    rating={generateRandomRating()}
                    sales={generateRandomSales()}
                />
            </div>
        </div>
    );
};

export default FeaturedPosts;
