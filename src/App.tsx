import { Button } from "@/components/ui/button";

function App() {
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
