import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";

const HomePage = () => {
  console.log("HomePage");
  useOnlyAuthenticatedUser();

  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return <div>HomePage</div>;
};

export default HomePage;
