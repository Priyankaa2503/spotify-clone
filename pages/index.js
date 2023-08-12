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
  const [songId, setSongId] = useState(null); //state to set the song id to display a specific song in the main component
  const [isTrackPlaying, setIsTrackPlaying] = useState(false);

  return (
    <div className="">
      <main className="flex w-full h-screen overflow-hidden bg-black">
        <Sidebar setView={setView} view={view} setPlaylistId={setPlaylistId} />
        {/* render components based on view */}
        {view === "playlist" && (
          <PlaylistView
            playlistId={playlistId}
            setView={setView}
            setArtistId={setArtistId}
            setSongId={setSongId}
            setIsTrackPlaying={setIsTrackPlaying}
          />
        )}
        {view === "search" && (
          <Search
            setView={setView}
            setPlaylistId={setPlaylistId}
            setSongId={setSongId}
            setIsTrackPlaying={setIsTrackPlaying}
            setArtistId={setArtistId}
          />
        )}
        {view === "library" && (
          <Library setView={setView} setPlaylistId={setPlaylistId} />
        )}
        {view === "artist" && (
          <Artist
            setView={setView}
            setArtistId={setArtistId}
            artistId={artistId}
            setSongId={setSongId}
            setIsTrackPlaying={setIsTrackPlaying}
          />
        )}
      </main>
      <Player
        songId={songId}
        setSongId={setSongId}
        setIsTrackPlaying={setIsTrackPlaying}
        IsTrackPlaying={isTrackPlaying}
      />
    </div>
  );
}
