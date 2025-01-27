import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";

import { customFetch } from "@/utils";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "@/components";
import { ReduxStore } from "@/store";
import { type OrdersResponse } from "@/utils";
import { toast } from "@/hooks/use-toast";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    return null;
  };

function Orders() {
  return <div>Orders</div>;
}
export default Orders;
