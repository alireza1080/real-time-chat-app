import useOnlyAuthenticatedUser from "../hooks/useOnlyAuthenticatedUser";
import { useEffect, useRef } from "react";
import useAuthStore from "../store/authStore";

const HomePage = () => {
  useOnlyAuthenticatedUser();

  const authUser = useAuthStore((state) => state.authUser);

  const homePageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (authUser) {
      homePageRef.current?.classList.remove("opacity-0");
    }
  }, [authUser]);

  return (
    <div ref={homePageRef} className="opacity-0">
      HomePage
    </div>
  );
};

export default HomePage;
