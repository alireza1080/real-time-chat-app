import { ScrollArea } from "./ui/scroll-area";

const Messages = () => {
  return (
    <ScrollArea className="h-full w-full overflow-y-auto shadow-2xl">
      <div className="flex h-[300vh] w-full flex-col gap-4"></div>
    </ScrollArea>
  );
};

export default Messages;
