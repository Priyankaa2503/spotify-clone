import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Song from "./Song";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const PlaylistView = ({
  playlistId,
  setSongId,
  setIsTrackPlaying,
  setView,
  setArtistId,
}) => {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [color, setColor] = useState(null); // Initialize color as null
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [opacity, setOpacity] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    async function getplaylistbyid() {
      if (session && session.accessToken) {
        const res = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }
    }
    getplaylistbyid();
  }, [session, playlistId]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  }, [playlistId]);
  function changeOpacity(scrollPos) {
    // scrollPos = 0 -> opacity = 0
    // scrollPos = 300 -> opacity = 1, textOpacity = 0
    // scrollPos = 310 -> opacity = 1, textOpacity = 1
    const offset = 300;
    const textOffset = 10;
    if (scrollPos < offset) {
      const newOpacity = 1 - (offset - scrollPos) / offset;
      setOpacity(newOpacity);
      setTextOpacity(0);
    } else {
      setOpacity(1);
      const delta = scrollPos - offset;
      const newTextOpacity = 1 - (textOffset - delta) / textOffset;
      setTextOpacity(newTextOpacity);
    }
  }
  return (
    <div className="flex-grow h-screen ">
      <header
        style={{ opacity: opacity }}
        className="text-white sticky top-0 h-20 z-10 text-xl bg-neutral-800 p-8 flex items-center font-bold"
      >
        <div style={{ opacity: textOpacity }} className="flex items-center">
          {data && <img className="h-8 w-8 mr-6" src={data.images[0].url} />}
          <p>{data?.name}</p>
        </div>
      </header>
      <div
        onClick={() => signOut()}
        className="absolute z-20 top-5 right-8 flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
      >
        <img
          className="rounded-full w-7 h-7"
          src={session.user.image}
          alt="profile pic"
        />
        <p className="text-sm">Logout</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <div
        onScroll={(e) => changeOpacity(e.target.scrollTop)}
        className="relative -top-20 h-screen overflow-y-scroll bg-neutral-900"
      >
        <section
          className={`flex items-end space-x-7 bg-gradient-to-b to-neutral-900 ${color} h-80 text-white p-8`}
        >
          {data && <img className="h-44 w-44" src={data?.images[0].url} />}
          <div>
            <p className="text-sm font-bold">Playlist</p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold">
              {data?.name}
            </h1>
            <p className="mt-2 text-xs text-white">{data?.description}</p>
            <div className="flex gap-2 text-sm font-medium items-center">
              <p className="mt-2  text-white">{data?.owner?.display_name}</p>
              <p className="font-bold">.</p>
              <p className="mt-2  text-white">{data?.followers?.total} likes</p>
              <p className="font-bold">.</p>
              <p className="mt-2  text-white">{data?.tracks?.total} songs</p>
            </div>
          </div>
        </section>
        <div className="text-white px-8 flex flex-col space-y-1 pb-28">
          {data?.tracks?.items.map((track, i) => {
            // song component
            return (
              <Song
                setView={setView}
                setArtistId={setArtistId}
                setIsTrackPlaying={setIsTrackPlaying}
                setSongId={setSongId}
                key={track.track.id}
                sno={i}
                track={track.track}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
