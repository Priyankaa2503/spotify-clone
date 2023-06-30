import Image from "next/image";
import { mainLinks } from "@/pages/home/links";
const MainNav = () => {
  return (
    <div>
      {mainLinks.map((link) => {
        return (
          <div
            key={link.id}
            className="flex items-center space-x-2 cursor-pointer hover:bg-[#282828] rounded-md p-2"
          >
            <div className="h-9 w-9 flex justify-center items-center p-2 rounded-full">
              <Image src={link.image} alt="" className="h-5 w-5" />
            </div>
            <p className="text-white">{link.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MainNav;
