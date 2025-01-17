import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { formatAsDollars, type ProductsResponse } from "@/utils";

function ProductsGrid() {
  const {data:products} = useLoaderData()  as ProductsResponse
  
  return (
    <div className="p-12 grid gap-4 md:grid-cols-2  lg:grid-cols-3">
      {products.map((products) => {
        const {title, price ,image} = products.attributes
        return <Link  to={`/products/`} ></Link>
      })}
    </div>
  )
}

export default ProductsGrid