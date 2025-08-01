import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";

const SettingsPage = () => {
  useOnlyAuthenticatedUser();

  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return <div>SettingsPage</div>;
};

export default SettingsPage;
