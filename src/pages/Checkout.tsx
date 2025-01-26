import { useAppSelector } from "@/hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "@/components";
import { LoaderFunction, redirect } from "react-router-dom";
import { type ReduxStore } from "@/store";
import { toast } from "@/hooks/use-toast";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<null> => {
    const user = store.getState();
    return null;
  };

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
export default Checkout;
