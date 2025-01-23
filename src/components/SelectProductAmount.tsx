import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}

type SelectProductAmountProps = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

type SelectCartItemAmountProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => void;
};

function SelectProductAmount({
  mode,
  amount,
  setAmount,
}: SelectProductAmountProps | SelectCartItemAmountProps) {
  const cartItem = mode === Mode.CartItem;

  return (
    <>
      <h4 className="font-medium mb-2 ">Amount : </h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
      ></Select>
    </>
  );
}

export default SelectProductAmount;
