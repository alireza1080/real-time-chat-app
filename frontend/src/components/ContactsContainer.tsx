import { useEffect } from "react";

import { ScrollArea } from "./ui/scroll-area";
import useChatStore from "../store/chatStore";
import Contact from "./Contact";
import ContactSkeleton from "./ContactSkeleton";

const ContactsContainer = () => {
  const users = useChatStore((state) => state.users);
  const isUsersLoading = useChatStore((state) => state.isUsersLoading);
  const getUsers = useChatStore((state) => state.getUsers);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScrollArea className="max-h-[calc(100vh-10rem)] w-full">
      {!isUsersLoading && (
        <div className="p-4">
          {users.map((user) => (
            <Contact key={user.id} user={user} />
          ))}
        </div>
      )}
      {isUsersLoading && (
        <div className="p-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <ContactSkeleton key={index} />
          ))}
        </div>
      )}
    </ScrollArea>
  );
};

export default ContactsContainer;
