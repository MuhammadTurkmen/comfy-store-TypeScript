import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Error() {
  const error = useRouteError();
  console.log();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold"></h1>
        </div>
      </main>
    );
  }
  return <div>Error</div>;
}
export default Error;
