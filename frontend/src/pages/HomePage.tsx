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
    <div
      ref={homePageRef}
      className="flex h-full w-full flex-1 !overflow-auto px-4 py-2 opacity-0"
    ></div>
  );
};

export default HomePage;
{
  /* 
https://ui.shadcn.com/docs/components/resizable
https://ui.shadcn.com/docs/components/scroll-area
https://ui.shadcn.com/docs/components/sheet
https://ui.shadcn.com/docs/components/sidebar
https://ui.shadcn.com/docs/components/skeleton
https://ui.aceternity.com/components/github-globe
https://ui.aceternity.com/components/world-map
https://originui.com/avatar
*/
}
