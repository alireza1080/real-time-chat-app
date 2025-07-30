import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import useGuestRoute from "../hooks/useGuestRoute";

const SigninPage = () => {
  useGuestRoute();
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return <div>SigninPage</div>;
};

export default SigninPage;
