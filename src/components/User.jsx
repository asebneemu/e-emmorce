import React, { useEffect, useState } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    if (loggedInStatus) {
      const firstName = localStorage.getItem("firstName") || "";
      const lastName = localStorage.getItem("lastName") || "";
      setUserInfo({ firstName, lastName });
    }
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      {/* Siyah Çember */}
      <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
        <span className="text-white text-lg font-bold">
          {userInfo.firstName.charAt(0)}
          {userInfo.lastName.charAt(0)}
        </span>
      </div>
      
      {/* Kullanıcı Adı */}
      <h1 className="text-xl font-bold mt-2">
        {userInfo.firstName} {userInfo.lastName}
      </h1>
    </div>
  );
};

export default User;
