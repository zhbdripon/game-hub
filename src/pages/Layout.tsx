import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box paddingX={5} marginTop={3}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
