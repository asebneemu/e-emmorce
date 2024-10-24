import { Link } from 'react-router-dom';
import DropdownButtons from './DropdownButtons'; // Dropdown componentini ekliyoruz

export default function NavbarButtons() {
    return (
        <div className="flex space-x-4 gap-4">
            {/* Home butonunu Link ile değiştirdik */}
            <Link to="/home-page" className="p-2 text-gray-700 text-lg font-bold rounded">
                Home
            </Link>
            <DropdownButtons /> {/* Shop butonunu yeni component ile değiştirdik */}
            <Link to="/about-page" className='p-2 text-gray-700 text-lg font-bold rounded'>About</Link>
            <button className="p-2 text-gray-700 text-lg font-bold rounded">Blog</button>
            <button className="p-2 text-gray-700 text-lg font-bold rounded">Contact</button>
            <button className="p-2 text-gray-700 text-lg font-bold rounded">Pages</button>
        </div>
    );
}
