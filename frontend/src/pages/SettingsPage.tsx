import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";

const SettingsPage = () => {
  useOnlyAuthenticatedUser();

  return <div>SettingsPage</div>;
};

export default SettingsPage;
