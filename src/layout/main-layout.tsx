import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Container from "../components/container";
import Header from "../components/header";


export const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Header />
      <Container className="pt-[4.8rem]">
        <Outlet />
      </Container>
    </>
  );
};
