import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

function CartButton() {
  const numItemsInCart = 5;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center"
    >
      CartButton
    </Button>
  );
}
export default CartButton;
