import useOnlyGuestUser from "../hooks/useOnlyGuestUser";
import SigninForm from "../components/SigninForm";

const SigninPage = () => {
  useOnlyGuestUser();

  return (
    <div className="flex h-full w-full items-center justify-center px-5 py-10">
      <SigninForm />
    </div>
  );
};

export default SigninPage;
