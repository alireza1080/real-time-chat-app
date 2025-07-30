import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import useGuestRoute from "../hooks/useGuestRoute";

const SignupPage = () => {
  useGuestRoute();
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      SignupPage
    </div>
  );
};

export default SignupPage;
