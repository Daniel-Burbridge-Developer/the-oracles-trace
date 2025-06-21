import { FastForwardIcon, PauseIcon, PlayIcon, RewindIcon } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

const TopControls = () => {
  return (
    <div className="flex w-full items-center justify-between bg-red-500 px-2">
      {/* Left: SidebarTrigger */}
      <div>
        <SidebarTrigger />
      </div>
      {/* Right: Title and Controls */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Speed Controls</h1>
        <Button variant="outline">
          <RewindIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <PauseIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <PlayIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <FastForwardIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TopControls;
