import { formatAsDollars } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";

import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import { editItem, removeItem } from "@/featuers/cart/cartSlice";

export const FirstColumn = () => {
  return <h4>First Column</h4>;
};
export const SecondColumn = () => {
  return <h4>Second Column</h4>;
};
export const ThirdColumn = () => {
  return <h4>Third Column</h4>;
};
export const FourthColumn = () => {
  return <h4>Fourth Column</h4>;
};
