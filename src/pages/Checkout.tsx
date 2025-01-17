import { useAppSelector } from "@/hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "@/components";
import { LoaderFunction, redirect } from "react-router-dom";
import { type ReduxStore } from "@/store";
import { toast } from "@/hooks/use-toast";

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart is empty" />;
  }

  return <div>Checkout</div>;
}
export default Checkout;
