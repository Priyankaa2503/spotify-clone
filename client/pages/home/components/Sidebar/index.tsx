import Image from "next/image";
import Logo from "@/public/images/SpotifyLogo.png";
import MainNav from "./components/MainNav";
import PlaylistNav from "./components/PlaylistNav";
const Sidebar = () => {
  return (
    <div className="bg-black w-64 flex flex-col gap-10 h-full py-10 px-2">
      <div className="w-full px-5">
        <Image src={Logo} alt="" />
      </div>
      <MainNav />
      <PlaylistNav />
    </div>
  );
};

export default Sidebar;
