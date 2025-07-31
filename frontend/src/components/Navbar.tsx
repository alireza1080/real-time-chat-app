import Logo from "@/assets/Logo.png";
import { Button } from "../components/ui/button";
import { Settings } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";

function Navbar() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Main nav */}
          <a href="/" className="text-primary hover:text-primary/90">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />

              <h3 className="text-primary hidden text-2xl font-bold sm:block">
                ChatsApp
              </h3>
            </div>
          </a>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild size="sm" className="text-sm">
            <a href="/settings">
              <Settings />
              <h3 className="hidden sm:block">Settings</h3>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
