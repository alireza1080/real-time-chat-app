import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";

const ProfilePage = () => {
  useOnlyAuthenticatedUser();

  return <div>ProfilePage</div>;
};

export default ProfilePage;
