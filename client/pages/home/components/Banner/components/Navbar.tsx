import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Profile from "./Profile";
import ProfileImage from "@/public/images/Profile.png";
import { useState } from "react";
import Menu from "./Menu";
const Navbar = () => {
  const user = {
    name: "Angel",
    image: ProfileImage,
  };
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="absolute flex px-10 justify-between items-center
     w-full h-20 top-0 left-0 z-50"
    >
      <div className="flex gap-5">
        <div className="bg-[#131313] p-3 rounded-full opacity-75 cursor-pointer hover:opacity-100">
          <BsChevronLeft />
        </div>
        <div className="bg-[#131313] p-3 rounded-full opacity-75 cursor-pointer hover:opacity-100">
          <BsChevronRight />
        </div>
      </div>
      <div className="relative">
        <Profile
          userImage={user.image}
          userName={user.name}
          onToggle={handleToggleMenu}
          showMenu={showMenu}
        />
        {showMenu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
