import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import SignupForm from "../components/SignupForm";
import useOnlyGuestUser from "../hooks/useOnlyGuestUser";

const SignupPage = () => {
  useOnlyGuestUser();

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
