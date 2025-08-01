import useOnlyGuestUser from "../hooks/useOnlyGuestUser";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  useOnlyGuestUser();

  return (
    <div className="flex h-full w-full items-center justify-center px-5 py-10">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
