import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";
import { useEffect, useRef } from "react";
import useAuthStore from "../store/authStore";

const SettingsPage = () => {
  useOnlyAuthenticatedUser();

  const settingsPageRef = useRef<HTMLDivElement>(null);

  const authUser = useAuthStore((state) => state.authUser);

  useEffect(() => {
    if (authUser) {
      settingsPageRef.current?.classList.remove("opacity-0");
    }
  }, [authUser]);

  return (
    <div ref={settingsPageRef} className="opacity-0">
      SettingsPage
    </div>
  );
};

export default SettingsPage;
