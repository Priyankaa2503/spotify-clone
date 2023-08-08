import Image from "next/image";
import Sidebar from "../components/Sidebar";
import PlaylistView from "../components/PlaylistView";
import Player from "../components/Player";
export default function Home() {
  return (
    <div className="">
      <main className="flex w-full h-screen overflow-hidden bg-black">
        <Sidebar />
        <PlaylistView />
      </main>
      <Player />
    </div>
  );
}
