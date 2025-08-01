import useAuthStore from "../store/authStore";
import Loader from "../components/Loader";
import SigninForm from "../components/SigninForm";
import useOnlyGuestUser from "../hooks/useOnlyGuestUser";

const SigninPage = () => {
  useOnlyGuestUser();

  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);

  if (isCheckingAuth) {
    return <Loader />;
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-5 py-10">
      <SigninForm />
    </div>
  );
};

export default SigninPage;
