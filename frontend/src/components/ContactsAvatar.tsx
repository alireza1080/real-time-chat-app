import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type ContactsAvatarProps = {
  isOnline: boolean;
  image: string;
};

const ContactsAvatar = ({ isOnline, image }: ContactsAvatarProps) => {
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
