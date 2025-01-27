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
    const user = store.getState().userState.user;

    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get<OrdersResponse>("/orders", {
        params,
        headers: {
          Authorization: `bearer ${user.jwt}`,
        },
      });
      return { ...response.data };
    } catch (error) {
      toast({ description: "Faild to fetch orders" });
      return null;
    }
  };

function Orders() {
  return <div>Orders</div>;
}
export default Orders;
