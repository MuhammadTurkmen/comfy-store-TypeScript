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

export const loader: LoaderFunction = async () => {};

function SingleProduct() {
  return <div>SingleProduct</div>;
}
export default SingleProduct;
