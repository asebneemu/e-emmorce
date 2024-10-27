import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AuthButton() {
    return (
        <Link to="/member-page" className="flex items-center space-x-2 gap-2 p-2 bg-transparent hover:bg-gray-100 rounded">
            <FaRegUser className="w-4 h-4" />
            <p className="text-lg font-medium">Giriş Yap</p>
        </Link>
    );
}
