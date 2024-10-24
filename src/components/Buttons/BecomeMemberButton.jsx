import { FaArrowRight } from "react-icons/fa";  // FontAwesome'dan sağ ok ikonu

export default function BecomeMemberButton() {
    return (
        <button className="flex items-center justify-center px-6 py-2 bg-blue-700 bg-opacity-50 hover:bg-opacity-70 rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out ">
            Become a member
            <FaArrowRight className="ml-2 text-white" />  {/* Sağ ok ikonu */}
        </button>
    );
}
