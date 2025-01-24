import { useAppSelector } from "@/hooks";
import { CartItemsList, SectionTitle, CartTotals } from "@/components";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Cart() {
  // temp
  const user = null;

  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>;
    </div>
  );
}
export default Cart;
