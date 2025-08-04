import Logo from "@/assets/Logo.png";
import { Button } from "../components/ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Navbar() {
  const authUser = useAuthStore((state) => state.authUser);
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Main nav */}
          <Link to="/" className="text-primary hover:text-primary/90">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />

              <h3 className="text-primary hidden text-2xl font-bold sm:block">
                ChatsApp
              </h3>
            </div>
          </Link>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          {authUser && (
            <Button asChild size="sm" className="text-sm">
              <Link to="/profile">
                <User />
                <h3 className="hidden sm:block">Profile</h3>
              </Link>
            </Button>
          )}
          {authUser && (
            <Button asChild size="sm" className="text-sm">
              <div className="cursor-pointer" onClick={signOut}>
                <LogOut />
                <h3 className="hidden sm:block">Sign Out</h3>
              </div>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
