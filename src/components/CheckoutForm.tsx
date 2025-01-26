import { ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatAsDollars, type Checkout } from "@/utils";

import { ReduxStore } from "@/store";
import { toast } from "@/hooks/use-toast";
import { clearCart } from "@/featuers/cart/cartSlice";

function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
    </Form>
  );
}

export default CheckoutForm;
