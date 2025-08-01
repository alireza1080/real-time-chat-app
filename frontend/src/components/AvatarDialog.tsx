import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Camera } from "lucide-react";
import AvatarUploader from "./AvatarUploader";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import { toast } from "sonner";

const AvatarDialog = () => {
  const updateProfilePicture = useAuthStore(
    (state) => state.updateProfilePicture,
  );
  const isUpdatingProfile = useAuthStore((state) => state.isUpdatingProfile);

  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!profilePicture) {
      toast.error("No image selected");
      return;
    }

    await updateProfilePicture(profilePicture);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-2 -bottom-2 !cursor-pointer rounded-full !p-0 !text-white transition-all hover:!bg-gray-800 sm:-right-1 sm:-bottom-1 md:right-0 md:bottom-0"
        >
          <Camera />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit your profile picture</DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <AvatarUploader setProfilePicture={setProfilePicture} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => setProfilePicture(null)}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={isUpdatingProfile}
            onClick={handleUpload}
            className="cursor-pointer"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarDialog;
