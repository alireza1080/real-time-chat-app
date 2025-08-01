import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import SignupForm from "../components/SignupForm";
import useProtectRoute from "../hooks/useProtectRoute";

const SignupPage = () => {
  useProtectRoute("guest");

  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-5 py-10">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
