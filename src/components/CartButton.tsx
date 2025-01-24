import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/hooks";

function CartButton() {
  const numItemsInCart = 5;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span className="h-6 w-6 flex items-center justify-center text-xs absolute -top-3 -right-3 bg-primary text-white rounded-full">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
