import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { formatAsDollars, type ProductsResponse } from "@/utils";

function ProductsGrid() {
  const {data:products} = useLoaderData()  as ProductsResponse
  
  return (
    <div>ProductsGrid</div>
  )
}

export default ProductsGrid