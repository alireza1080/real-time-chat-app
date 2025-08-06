import { X } from "lucide-react";
import ContactsAvatar from "./ContactsAvatar";
import useChatStore from "../store/chatStore";

const ChatHeader = () => {
  const selectedUser = useChatStore((state) => state.selectedUser);
  const setSelectedUser = useChatStore((state) => state.setSelectedUser);

  return (
    <div className="flex h-16 w-full items-center justify-between px-4 shadow-2xl md:h-20">
      <div className="flex items-center gap-6">
        <div className="scale-150">
          <ContactsAvatar
            isOnline={true}
            image={selectedUser?.profilePicture as string}
          />
        </div>
        <h3 className="hidden text-lg sm:block">{selectedUser?.fullName}</h3>
      </div>
      <div
        onClick={() => setSelectedUser(null)}
        className="hover:bg-muted-foreground/20 cursor-pointer rounded-full p-2"
      >
        <X />
      </div>
    </div>
  );
};

export default ChatHeader;
