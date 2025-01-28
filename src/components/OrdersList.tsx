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
  return <div>OrdersList</div>;
}

export default OrdersList;
