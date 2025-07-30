import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axiosInstance from "../lib/axiosInstace";
import { AxiosError } from "axios";

type User = {
  id: string;
  fullName: string;
  email: string;
  profilePicture: string;
  createdAt: Date;
  updatedAt: Date;
};

type AuthStore = {
  authUser: User | null;
  isSigningUp: boolean;
  isSigningIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;

  checkAuth: () => Promise<void>;
};

type Response = {
  success: boolean;
  message: string;
  data?: User;
};

const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    authUser: null,
    isSigningUp: false,
    isSigningIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
      console.log("checkAuth");
      try {
        const { data } = await axiosInstance.get<Response>("/auth/get-user");

        set({ authUser: data.data });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data.message);
        }
        set({ authUser: null });
      } finally {
        set({ isCheckingAuth: false });
      }
    },
  })),
);

export default useAuthStore;
