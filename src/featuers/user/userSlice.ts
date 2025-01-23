import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/hooks/use-toast";

export type User = {
  username: string;
  jwt: string;
};

type USerState = {
  user: User | null;
};

const getUserFromLocalStorage = () : User | null {
  const user = localStorage.getItem('user')
}

const initialState: USerState  = {
  user: 
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
