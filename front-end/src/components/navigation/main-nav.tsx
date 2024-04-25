import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuDrawer from "./menu-drawer";
import TopBar from "./top-bar";

export interface MainNavProps {
  children: React.ReactNode;
}
const MainNav = ({ children }: MainNavProps) => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

  const handleMenuDrawerToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar onMenuClick={handleMenuDrawerToggle} />
      <MenuDrawer
        mobileNavOpen={mobileNavOpen}
        onDrawerToggle={handleMenuDrawerToggle}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainNav;
