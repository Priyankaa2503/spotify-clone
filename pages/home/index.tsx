import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";

const index = () => {
  return (
    <div className="font-pops flex h-screen w-screen">
      <Sidebar />
      <Banner />
    </div>
  );
};

export default index;
