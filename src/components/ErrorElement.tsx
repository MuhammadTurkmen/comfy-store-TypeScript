import { useRouteError } from "react-router-dom";

function ErrorEelement() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex justify-center items-center my-auto">
      <h4 className="font-bold text-4xl">there was an error...</h4>
    </div>
  );
}

export default ErrorEelement;
