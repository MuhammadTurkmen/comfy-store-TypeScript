import { ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatAsDollars, type Checkout } from "@/utils";

import { ReduxStore } from "@/store";
import { toast } from "@/hooks/use-toast";
import { clearCart } from "@/featuers/cart/cartSlice";

function CheckoutForm() {
  return <div>CheckoutForm</div>;
}

export default CheckoutForm;
