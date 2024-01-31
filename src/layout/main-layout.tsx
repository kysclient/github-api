import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Container from "../components/container";
export const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {/* <Header /> */}
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
