import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ToasterWrapper from "./components/ToasterWrapper";
import useAuthStore from "./store/authStore";
import { useEffect } from "react";
import Loader from "./components/Loader";

const App = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="flex h-screen w-full max-w-full flex-col overflow-x-hidden xl:container xl:mx-auto">
      <Navbar />
      <div className="flex-1">{isCheckingAuth ? <Loader /> : <Outlet />}</div>
      <ToasterWrapper />
    </div>
  );
};

export default App;
