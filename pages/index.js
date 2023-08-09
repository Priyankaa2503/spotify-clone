import Image from "next/image";
import Sidebar from "../components/Sidebar";
import PlaylistView from "../components/PlaylistView";
import { useSession } from "next-auth/react";
import Player from "../components/Player";
import { useEffect, useState } from "react";
import Search from "@/components/Search";
import Library from "@/components/Library";
import Artist from "@/components/Artist";
export default function Home() {
  const [view, setView] = useState("search"); //state to set what to display in the main component
  const [playlistId, setPlaylistId] = useState(null); //state to set the playlist id to display a specific playlist in the main component
  const [artistId, setArtistId] = useState(null); //state to set the artist id to display a specific artist in the main component
  return (
    <div className="">
      <main className="flex w-full h-screen overflow-hidden bg-black">
        <Sidebar setView={setView} view={view} setPlaylistId={setPlaylistId} />
        {/* render components based on view */}
        {view === "playlist" && <PlaylistView playlistId={playlistId} />}
        {view === "search" && <Search />}
        {view === "library" && <Library />}
        {view === "artist" && <Artist />}
      </main>
      <Player />
    </div>
  );
}
