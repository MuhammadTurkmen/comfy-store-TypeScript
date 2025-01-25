import { useAppSelector } from "@/hooks";
import { formatAsDollars } from "@/utils";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState
  );
  return (
    <Card className="p-8 bg-muted">
      <CartTotalsRow label="Subtotal" amount={cartTotal} />
      <CartTotalsRow label="Shipping" amount={shipping} />
    </Card>
  );
}

export default CartTotals;

function CartTotalsRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2 " />}
    </>
  );
}
