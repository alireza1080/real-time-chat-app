import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { UserRoundSearch } from "lucide-react";
import CheckOnlineSwitch from "./CheckOnlineSwitch";
import ContactsContainer from "./ContactsContainer";

const Contacts = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <article className="flex flex-col gap-4">
              <section className="flex items-center gap-2">
                <UserRoundSearch />
                <h3>Contacts</h3>
              </section>
              <section>
                <CheckOnlineSwitch />
              </section>
            </article>
          </SheetTitle>
        </SheetHeader>
        <ContactsContainer />
      </SheetContent>
    </Sheet>
  );
};

export default Contacts;
