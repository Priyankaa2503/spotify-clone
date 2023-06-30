import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
interface GreetingCardProps {
  name: string;
  image: StaticImageData;
}
const GreetingCard: React.FC<GreetingCardProps> = ({ name, image }) => {
  const [showPlayButton, setShowPlayButton] = useState(false);
  return (
    <div
      className="bg-[#303030] hover:bg-[#454545] transition duration-300 flex h-20 tracking-wider font-semibold cursor-pointer w-full rounded-md overflow-hidden"
      onMouseEnter={() => setShowPlayButton(true)}
      onMouseLeave={() => setShowPlayButton(false)}
    >
      <Image src={image} alt="" className="h-full object-cover" />
      <div className="h-full w-[50%] px-5 flex items-center">{name}</div>
      <div className="w-24 h-full px-5 items-center flex">
        {showPlayButton && (
          <div className="bg-green-600 text-black h-14 w-14 rounded-full flex justify-center items-center">
            <BiCaretRight size={30} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GreetingCard;
