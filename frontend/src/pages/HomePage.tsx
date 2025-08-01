import Loader from "../components/Loader";
import useAuthStore from "../store/authStore";
import useProtectRoute from "../hooks/useProtectRoute";

const HomePage = () => {
  useProtectRoute("auth");

  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return <div>HomePage</div>;
};

export default HomePage;
