import { useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

function SubmitBtn({ text, className }: { text: string; className?: string }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return <div>SubmitBtn</div>;
}

export default SubmitBtn;
