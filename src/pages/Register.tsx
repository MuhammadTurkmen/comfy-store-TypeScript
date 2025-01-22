import { ActionFunction, Form, Link, redirect } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitBtn, FormInput } from "@/components";
import { customFetch } from "@/utils";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted"></Card>
    </section>
  );
}
export default Register;
