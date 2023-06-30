import Image from "next/image";
import { playlistLinks } from "@/pages/home/links";
const PlaylistNav = () => {
  return (
    <div>
      {playlistLinks.map((link) => {
        return (
          <div
            key={link.id}
            className="flex items-center space-x-2 cursor-pointer hover:bg-[#282828] rounded-md p-2"
          >
            <div className="h-12 w-12 flex justify-center items-center p-2">
              <Image src={link.image} alt="" className="h-8 w-8 rounded-sm" />
            </div>
            <p className="text-white">{link.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlaylistNav;
