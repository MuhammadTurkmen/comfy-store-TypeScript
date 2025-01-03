import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
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
