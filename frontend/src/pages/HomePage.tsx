import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";

const HomePage = () => {
  useOnlyAuthenticatedUser();

  return <div>HomePage</div>;
};

export default HomePage;
