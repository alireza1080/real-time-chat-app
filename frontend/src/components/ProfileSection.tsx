import AvatarSection from "./AvatarSection";
import ReadOnlyInput from "./ReadOnlyInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import useAuthStore from "../store/authStore";

const ProfileSection = () => {
  const authUser = useAuthStore((state) => state.authUser);

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader className="flex flex-col items-center gap-2">
        <CardTitle>Profile</CardTitle>
        <CardDescription>Your profile information</CardDescription>
        <CardContent className="flex flex-col items-center gap-4 py-4">
          <AvatarSection />
        </CardContent>
      </CardHeader>
      <Separator />
      <CardContent>
        <div className="flex flex-col gap-6">
          <ReadOnlyInput
            label="Full Name"
            value={authUser?.fullName as string}
          />
          <ReadOnlyInput label="Email" value={authUser?.email as string} />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
};

export default ProfileSection;
