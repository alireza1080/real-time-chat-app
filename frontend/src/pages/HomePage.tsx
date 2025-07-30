import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import useProtectRoute from "../hooks/useProtectRoute";

const HomePage = () => {
  useProtectRoute();
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return <div>HomePage</div>;
};

export default HomePage;
