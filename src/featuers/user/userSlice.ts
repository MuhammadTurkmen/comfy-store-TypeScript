import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/hooks/use-toast";

export type User = {
  username: string;
  jwt: string;
};

type USerState = {
  user: User | null;
};

const initialState = {
  name: "user slice",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
