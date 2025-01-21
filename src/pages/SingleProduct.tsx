import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
} from "@/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectProductAmount, SelectProductColor } from "@/components";
import { type LoaderFunction } from "react-router-dom";

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`
  );
  return { ...response.data };
};

function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    console.log("add to cart");
  };
  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant={"link"} size={"sm"}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant={"link"} size={"sm"}>
          <Link to={"/products"}>Home</Link>
        </Button>
      </div>
    </section>
  );
}
export default SingleProduct;
