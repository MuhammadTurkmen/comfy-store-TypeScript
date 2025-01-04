import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
import {
  Error,
  About,
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);

  return (
    <div className="text-4xl p-4">
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log("it worked")}
      >
        Click me
      </Button>
    </div>
  );
}
export default App;
