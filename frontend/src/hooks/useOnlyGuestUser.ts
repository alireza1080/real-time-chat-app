import { useEffect } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useOnlyGuestUser = async () => {
  const navigate = useNavigate();

  const authUser = useAuthStore((state) => state.authUser);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const setIsCheckingAuth = useAuthStore((state) => state.setIsCheckingAuth);

  const checkIfUserIsGuest = async () => {
    if (authUser) {
      await checkAuth();
      if (authUser) navigate("/");
      toast.error("You are already logged in.");
    } else setIsCheckingAuth(false);
  };

  useEffect(() => {
    checkIfUserIsGuest();
  }, []);
};

export default useOnlyGuestUser;
