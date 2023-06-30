import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";

const Banner = () => {
  return (
    <div className="relative w-full h-screen pt-20 bg-gradient-to-b from-purple-950 to-neutral-900">
      <Navbar />
      <div className="w-full h-full overflow-y-auto">
        <div className="h-auto">
          <Greeting />
        </div>
      </div>
    </div>
  );
};

export default Banner;
