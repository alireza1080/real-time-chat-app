import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import SendMessageSection from "./SendMessageSection";

const ChatSection = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col">
      <ChatHeader />
      <div className="flex-1 overflow-hidden">
        <Messages />
      </div>
      <SendMessageSection />
    </div>
  );
};

export default ChatSection;
