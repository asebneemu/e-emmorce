import { FiHeart } from 'react-icons/fi';

export default function FavorilerButtonu() {
    return (
        <div className="flex items-center space-x-1 gap-2">
            <FiHeart className="w-4 h-4" />
            <p className="text-lg font-medium">1</p>
        </div>
    );
}
