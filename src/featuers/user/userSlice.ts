import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/hooks/use-toast";

export type User = {
  username: string;
  jwt: string;
};

type USerState = {
  user: User | null;
};

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem("user");
  if (!user) return null;

  return JSON.parse(user);
};

const initialState: USerState = {
  user: getUserFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      toast({ description: "Login Successful" });
      if (user.username === "demo user") {
        toast({ description: "Welcom Guest User" });
        return;
      }
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
