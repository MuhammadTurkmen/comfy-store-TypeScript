import { Header } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header></Header>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
}
export default HomeLayout;
