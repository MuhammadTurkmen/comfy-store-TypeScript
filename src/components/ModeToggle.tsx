import { useAppDispatch } from "@/hooks";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { setTheme } from "@/featuers/theme/themeSlice";

function ModeToggle() {
  return <div>ModeToggle</div>;
}
export default ModeToggle;
