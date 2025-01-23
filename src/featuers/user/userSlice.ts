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
    loginUser: () => {},
    logoutUser: () => {},
  },
});

export default userSlice.reducer;
