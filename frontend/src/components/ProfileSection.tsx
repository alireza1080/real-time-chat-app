import AvatarSection from "./AvatarSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

const ProfileSection = () => {
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
      <CardContent></CardContent>
      <Separator />
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
};

export default ProfileSection;
