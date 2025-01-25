import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";

function CartItemList() {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <Card
            key={cartItem.cartID}
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8"
          >
            Cart Item
          </Card>
        );
      })}
    </div>
  );
}

export default CartItemList;
