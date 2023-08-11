import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const Player = () => {
  return (
    <div className="h-20 bg-neutral-800 border-t fixed bottom-0 left-0 w-full border-neutral-700 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      <div className="flex items-center space-x-4">
        <img className="hidden md:inline h-10 w-10" src="" />
        <div>
          <p className="text-white text-sm">Song Name</p>
          <p className="text-neutral-400 text-xs">Artist Name</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <PauseCircleIcon className="h-10 w-10" />
      </div>
      <div></div>
    </div>
  );
};

export default Player;
