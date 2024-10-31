import { FaStar } from 'react-icons/fa';

export default function StarRating({ rating = 1.0 }) {
    // Rating değerini doğrula
    const validRating = !isNaN(rating) && rating >= 0.1 && rating <= 5 ? rating : 1.0;

    const renderStars = () => {
        const stars = [];
        
        for (let i = 1; i <= 5; i++) {
            const fillPercentage = Math.min(1, Math.max(0, validRating - i + 1)) * 100;

            stars.push(
                <div key={i} className="relative inline-block text-gray-300" style={{ width: '1em', height: '1em' }}>
                    <FaStar className="absolute inset-0 text-gray-300" /> {/* Boş yıldız */}
                    <FaStar
                        className="absolute inset-0 text-yellow-500 overflow-hidden"
                        style={{
                            clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`, // Doluluk oranına göre doldur
                        }}
                    />
                </div>
            );
        }

        return stars;
    };

    return (
        <div className="flex items-center justify-center">
            {renderStars()}
            <span className="ml-2 font-bold text-yellow-500 text-sm">({validRating.toFixed(1)})</span>
        </div>
    );
}
