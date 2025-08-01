import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";
import protectRoute from "../lib/protectRoute";

type TargetUser = "auth" | "guest";

const useProtectRoute = (targetUser: TargetUser) => {
  const navigate = useNavigate();

  const authUser = useAuthStore((state) => state.authUser);
  const setIsCheckingAuth = useAuthStore((state) => state.setIsCheckingAuth);

  useEffect(() => {
    if (targetUser === "auth" && !authUser) protectRoute("auth", navigate);
    if (targetUser === "guest" && authUser) protectRoute("guest", navigate);
    setIsCheckingAuth(false);
  }, [authUser, navigate]);
};

export default useProtectRoute;
