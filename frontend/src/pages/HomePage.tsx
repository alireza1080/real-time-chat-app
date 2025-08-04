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
    <div ref={homePageRef} className="flex flex-1 bg-blue-700 opacity-0">
      <div className="bg-red-500">Contacts</div>
      <div className="bg-green-800">Chat</div>
    </div>
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
https://magicui.design/docs/components/pointer
*/
}
