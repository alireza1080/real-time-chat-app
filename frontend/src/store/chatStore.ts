import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "sonner";
import { AxiosError } from "axios";

type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  text?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
};

type User = {
  id: string;
  fullName: string;
  email: string;
  profilePicture: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type ChatStore = {
  messages: Message[];
  users: User[];
  selectedUser: User | null;
  isUsersLoading: boolean;
  isMessagesLoading: boolean;

  getUsers: () => Promise<void>;
  getMessages: () => Promise<void>;
  setSelectedUser: (user: User) => void;
};

type Response<T> = {
  success: boolean;
  message: string;
  data?: T;
};

const useChatStore = create<ChatStore>()(
  devtools((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () => {
      try {
        set({ isUsersLoading: true });
        const { data } =
          await axiosInstance.get<Response<User[]>>("/messages/users");

        set({ users: data.data });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          return toast.error(error.response?.data.message);
        }
        console.log(error);
      } finally {
        set({ isUsersLoading: false });
      }
    },

    getMessages: async (id: string) => {
      try {
        set({ isMessagesLoading: true });
        const { data } = await axiosInstance.get<Response<Message[]>>(
          `/messages/${id}`,
        );

        set({ messages: data.data });
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          return toast.error(error.response?.data.message);
        }
        console.log(error);
      } finally {
        set({ isMessagesLoading: false });
      }
    },

    setSelectedUser: (user) => {
      set({ selectedUser: user });
    },
  })),
);

export default useChatStore;
