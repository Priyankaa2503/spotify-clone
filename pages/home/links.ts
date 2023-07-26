import HomeIcon from "@/public/images/sidebar/HomeIcon.png";
import SearchIcon from "@/public/images/sidebar/SearchIcon.png";
import LibraryIcon from "@/public/images/sidebar/LibraryIcon.png";
import CreateIcon from "@/public/images/sidebar/CreateIcon.png";
import HeartIcon from "@/public/images/sidebar/HeartIcon.png";
import EpisodesIcon from "@/public/images/sidebar/EpisodesIcon.png";
import AccountLink from "@/public/images/AccountLink.png";
const mainLinks = [
  {
    id: "home",
    name: "Home",
    image: HomeIcon,
  },
  {
    id: "search",
    name: "Search",
    image: SearchIcon,
  },
  {
    id: "library",
    name: "Your Library",
    image: LibraryIcon,
  },
];

const playlistLinks = [
  {
    id: "create",
    name: "Create Playlist",
    image: CreateIcon,
  },
  {
    id: "liked",
    name: "Liked Songs",
    image: HeartIcon,
  },
  {
    id: "episodes",
    name: "Your Episodes",
    image: EpisodesIcon,
  },
];

const MenuLinks = [
  {
    id: "account",
    href: "/account",
    name: "Account",
    logo: AccountLink,
  },
  {
    id: "profile",
    href: "/profile",
    name: "Profile",
    logo: "",
  },
  {
    id: "logout",
    href: "/logout",
    name: "Logout",
    logo: "",
  },
];

export { mainLinks, playlistLinks, MenuLinks };
