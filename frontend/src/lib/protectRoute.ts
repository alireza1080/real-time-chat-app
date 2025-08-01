import useAuthStore from "../store/authStore";
import { type NavigateFunction } from "react-router-dom";
import { toast } from "sonner";

type TargetUser = "auth" | "guest";

const protectRoute = async (
  targetUser: TargetUser,
  navigate: NavigateFunction,
) => {
  const { authUser, checkAuth } = useAuthStore.getState();

  await checkAuth();

  if (targetUser === "auth" && !authUser) {
    navigate("/signin");
    toast.error("You must be logged in to access this page.");
  }

  if (targetUser === "guest" && authUser) {
    navigate("/");
    toast.error("You are already logged in.");
  }
};

export default protectRoute;
