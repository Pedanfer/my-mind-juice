import { Box, IconButton, Menu, Typography } from "@mui/material";
import React, { FC } from "react";

const AppDropDownMenu: FC<{
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: () => void;
  pages: string[];
}> = (props) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={props.handleOpenNavMenu}
      ></IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(props.anchorElNav)}
        onClose={props.handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {props.pages.map((page) => (
          <Typography
            key={page}
            textAlign="center"
            component="a"
            href={`/${page.toLowerCase()}`}
          >
            {page}
          </Typography>
        ))}
      </Menu>
    </Box>
  );
};

export default AppDropDownMenu;
