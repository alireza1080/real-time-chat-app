import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import useProtectRoute from "../hooks/useProtectRoute";

const ProfilePage = () => {
  useProtectRoute();
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return <div>ProfilePage</div>;
};

export default ProfilePage;
