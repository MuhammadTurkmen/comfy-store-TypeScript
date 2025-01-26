import { ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatAsDollars, type Checkout } from "@/utils";
import { toast } from "@/components/ui/use-toast";
import { clearCart } from "../features/cart/cartSlice";
import { ReduxStore } from "@/store";

function CheckoutForm() {
  return <div>CheckoutForm</div>;
}

export default CheckoutForm;
