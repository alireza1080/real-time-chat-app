import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useAuthStore from "../store/authStore";

type ContactsAvatarProps = {
  userId: string;
  image: string;
};

const ContactsAvatar = ({ userId, image }: ContactsAvatarProps) => {
  const onlineUsers = useAuthStore((state) => state.onlineUsers);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const isOnline = onlineUsers.includes(userId);
    setIsOnline(isOnline);
  }, [onlineUsers]);

  return (
    <div className="relative size-fit">
      <Avatar>
        <AvatarImage src={image} alt="User Avatar" />
        <AvatarFallback>UA</AvatarFallback>
      </Avatar>
      <span
        className={`border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 ${
          isOnline ? "bg-emerald-500" : "bg-muted-foreground"
        }`}
      >
        <span className="sr-only">{isOnline ? "Online" : "Offline"}</span>
      </span>
    </div>
  );
};

export default ContactsAvatar;
