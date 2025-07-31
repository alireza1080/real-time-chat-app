import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { useWindowSize } from "./hooks/guarahooks/use-window-size";

const App = () => {
  const { width } = useWindowSize();

  return (
    <div className="flex h-screen w-full flex-col xl:container xl:mx-auto">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Toaster position={width < 768 ? "bottom-right" : "top-center"} />
    </div>
  );
};

export default App;
