import { useLoaderData } from "react-router-dom";

import { type OrdersResponse } from "@/utils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function OrdersList() {
  const { data: orders, meta } = useLoaderData() as OrdersResponse;

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">
        Totale orders : {meta.pagination.total}
      </h4>
      <Table>
        <TableCaption>A list of your recent orders</TableCaption>
        <TableHead>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="w-[100px]">Products</TableHead>
            <TableHead className="w-[100px]">Cost</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
}

export default OrdersList;
