
import { Hero, FeaturedProdocts } from "@/components";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utils";

const url = '/products?featured=true'

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url)
  console.log(response);
  return {...response.data}
}

function Landing() {
  
  return <>
  <Hero />
  <FeaturedProdocts />
  </>;
}
export default Landing;
