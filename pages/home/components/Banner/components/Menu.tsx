import { MenuLinks } from "@/pages/home/links";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="absolute top-[110%] right-0 w-48 h-32 bg-[#282828] overflow-hidden rounded-lg">
      {MenuLinks.map((link) => (
        <div
          key={link.id}
          className="w-full justify-between items-center flex h-1/3 px-3 hover:bg-[#393939] cursor-pointer"
          onClick={() => {}}
        >
          <div className="ml-2">{link.name}</div>
          {link.logo && <Image src={link.logo} alt="" className="h-5 w-5" />}
        </div>
      ))}
    </div>
  );
};

export default Menu;
