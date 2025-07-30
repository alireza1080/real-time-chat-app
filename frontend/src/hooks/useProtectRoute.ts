import { useCallback, useEffect } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useProtectRoute = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const authUser = useAuthStore((state) => state.authUser);
  const navigate = useNavigate();

  const checkAuthCallback = useCallback(async () => {
    await checkAuth();
    if (!authUser) {
      toast.error("You are not logged in");
      navigate("/signin", { replace: true });
    }
  }, []);

  useEffect(() => {
    checkAuthCallback();
  }, []);
};

export default useProtectRoute;
