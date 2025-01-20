import {
  Form,
  Link,
  redirect,
  type ActionFunction,
  useNavigate,
} from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitBtn, FormInput } from "@/components";
import { customFetch } from "@/utils";
import { toast } from "@/components/ui/use-toast";
import { type ReduxStore } from "@/store";
import { loginUser } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";
import { AxiosResponse } from "axios";

function Login() {
  return <div>Login</div>;
}
export default Login;
