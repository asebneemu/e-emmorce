import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const User = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  if (!currentUser) {
    return null; // Kullanıcı bilgisi yoksa hiçbir şey render etme
  }

  return (
    <Link to="/user-page" className="flex items-center space-x-2">
      <div
        className="rounded-full bg-black text-white text-sm font-bold flex items-center justify-center"
        style={{ width: "30px", height: "30px" }}
      >
        {currentUser.firstName?.charAt(0)}{currentUser.lastName?.charAt(0)}
      </div>
      <p className="text-lg font-semibold text-black">
        {currentUser.firstName} {currentUser.lastName}
      </p>
    </Link>
  );
};

export default User;
