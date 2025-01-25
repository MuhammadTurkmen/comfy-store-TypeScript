import { useAppSelector } from "@/hooks";
import { formatAsDollars } from "@/utils";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";

function CartTotals() {
  return <div>CartTotals</div>;
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
});
