import { FaRegUser } from 'react-icons/fa';

export default function AuthButton() {
    return (
        <button className="flex items-center space-x-2 gap-2 p-2 bg-transparent hover:bg-gray-100 rounded">
            <FaRegUser className="w-4 h-4" />
            <p className="text-lg font-medium">Login / Register</p>
        </button>
    );
}
