import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axiosInstance from "../lib/axiosInstance";
import { AxiosError } from "axios";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router-dom";

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
  signUp: (
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
    navigate: NavigateFunction,
  ) => Promise<void>;
  signIn: (
    email: string,
    password: string,
    navigate: NavigateFunction,
  ) => Promise<void>;
  signOut: () => Promise<void>;
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

    signUp: async (fullName, email, password, confirmPassword, navigate) => {
      try {
        set({ isSigningUp: true });
        const { data } = await axiosInstance.post<Response>("/auth/signup", {
          fullName,
          email,
          password,
          confirmPassword,
        });

        if (data.success) {
          set({ authUser: data.data });
          toast.success(data.message);
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
          return;
        }

        console.log(error);
        toast.error("Something went wrong");
      } finally {
        set({ isSigningUp: false });
      }
    },

    signIn: async (email, password, navigate) => {
      try {
        set({ isSigningIn: true });
        const { data } = await axiosInstance.post<Response>("/auth/signin", {
          email,
          password,
        });

        if (data.success) {
          set({ authUser: data.data });
          toast.success(data.message);
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
          return;
        }

        console.log(error);
        toast.error("Something went wrong");
      } finally {
        set({ isSigningIn: false });
      }
    },

    signOut: async () => {
      try {
        await axiosInstance.delete("/auth/logout");
        toast.success("Signed out successfully");
        set({ authUser: null });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
          console.log(error.response?.data);
        }
      }
    },
  })),
);

export default useAuthStore;
