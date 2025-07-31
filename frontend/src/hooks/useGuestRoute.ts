import { useCallback, useEffect } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useGuestRoute = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const authUser = useAuthStore((state) => state.authUser);
  const navigate = useNavigate();

  const checkGuestsCallback = useCallback(async () => {
    await checkAuth();
    if (authUser) {
      toast.error("You are already logged in");
      navigate("/", { replace: true });
    }
  }, [authUser, checkAuth, navigate]);

  useEffect(() => {
    checkGuestsCallback();
  }, [checkGuestsCallback]);
};

export default useGuestRoute;
