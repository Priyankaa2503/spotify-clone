import Image from "next/image";
import { StaticImageData } from "next/image";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
interface ProfileProps {
  userImage: StaticImageData;
  userName: string;
  onToggle: () => void;
  showMenu: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  userImage,
  userName,
  onToggle,
  showMenu,
}) => {
  const imageUrl = userImage.src;

  return (
    <div
      className="h-12 cursor-pointer w-auto rounded-full bg-black flex gap-2 items-center justify-center pl-1 pr-3"
      onClick={onToggle}
    >
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <Image src={imageUrl} alt="" width={100} height={100} />
      </div>
      <div>{userName}</div>
      <div className="w-5 flex justify-center">
        {showMenu ? (
          <BiSolidUpArrow size={12} />
        ) : (
          <BiSolidDownArrow size={12} />
        )}
      </div>
    </div>
  );
};

export default Profile;
