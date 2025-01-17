
import { Hero, FeaturedProdocts } from "@/components";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utils";

export const loader: LoaderFunction = async () => {
  console.log('landing page');
  return null 
}

function Landing() {
  return <>
  <Hero />
  <FeaturedProdocts />
  </>;
}
export default Landing;
