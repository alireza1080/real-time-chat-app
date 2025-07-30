import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default App;
