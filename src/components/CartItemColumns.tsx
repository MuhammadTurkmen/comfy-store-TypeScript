import { formatAsDollars } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";

import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import { editItem, removeItem } from "@/featuers/cart/cartSlice";

export const FirstColumn = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
    />
  );
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
