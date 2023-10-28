"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Psychology from "@mui/icons-material/Psychology";
import AppDropDownMenu from "./app-dropdown-menu";
import UserDropDownMenu from "./user-drop-down-menu";

const pages = ["Creators", "Books", "Videos", "About"];
const userOptions = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorNavMenu] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorNavMenu(null);

  return (
    <AppBar position="static" sx={{ boxShadow: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Psychology
            sx={{
              display: {
                xs: "none",
                md: "flex",
                width: "3%",
                height: "3%",
              },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MMJ
          </Typography>

          <AppDropDownMenu
            anchorElNav={anchorElNav}
            pages={pages}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
          />
          <Psychology
            sx={{
              display: { xs: "flex", md: "none" },
              width: "9%",
              height: "9%",
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MMJ
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component="a"
                href={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <UserDropDownMenu userOptions={userOptions} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
