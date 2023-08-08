import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Song from "./Song";
import { signOut } from "next-auth/react";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const PlaylistView = () => {
  return (
    <div className="flex-grow h-screen">
      <header className="text-white sticky top-0 h-20 z-10 text-4xl bg-neutral-800 p-8 flex items-center font-bold">
        <div className="flex items-center">
          <img className="h-8 w-8 mr-6" src="" />
          <p>Playlist name</p>
        </div>
      </header>
      <div
        onClick={() => signOut()}
        className="absolute z-20 top-5 right-8 flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
      >
        <img className="rounded-full w-7 h-7" src="" alt="profile pic" />
        <p className="text-sm">Logout</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <div className="relative -top-20 h-screen overflow-y-scroll bg-neutral-900">
        <section
          className={`flex items-end space-x-7 bg-gradient-to-b to-neutral-900  h-80 text-white p-8`}
        >
          <img className="h-44 w-44" src="" />
          <div>
            <p className="text-sm font-bold">Playlist</p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold">
              Playlist name
            </h1>
          </div>
        </section>
        <div className="text-white px-8 flex flex-col space-y-1 pb-28">
          <Song />
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
