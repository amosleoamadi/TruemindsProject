import { Outlet } from "react-router-dom";
import { Footer, Header } from "../static";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
