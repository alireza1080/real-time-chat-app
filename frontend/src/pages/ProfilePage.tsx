import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";

const ProfilePage = () => {
  useOnlyAuthenticatedUser();

  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return <div>ProfilePage</div>;
};

export default ProfilePage;
