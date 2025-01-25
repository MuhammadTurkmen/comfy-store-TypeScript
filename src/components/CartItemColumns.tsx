import { formatAsDollars } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";

import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import { editItem, removeItem } from "@/featuers/cart/cartSlice";

function CartItemColumns() {
  return <div>CartItemColumns</div>;
}

export default CartItemColumns;
