import { useEffect } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useOnlyAuthenticatedUser = () => {
  const navigate = useNavigate();

  const authUser = useAuthStore((state) => state.authUser);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const setIsCheckingAuth = useAuthStore((state) => state.setIsCheckingAuth);

  const checkIfUserIsAuthenticated = async () => {
    console.log(authUser);
    if (!authUser) {
      await checkAuth();
      if (!authUser) navigate("/signin");
      toast.error("You must be logged in to access this page.");
    } else setIsCheckingAuth(false);
  };

  useEffect(() => {
    checkIfUserIsAuthenticated();
  }, []);
};

export default useOnlyAuthenticatedUser;
