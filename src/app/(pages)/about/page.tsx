import ResponsiveAppBar from "@/components/nav-bar/nav-bar";
import { Button, Container, CssBaseline, GlobalStyles } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          background: `linear-gradient(
                180deg,
                #9ECBCA 4%,      
                #fff 100%
              );`,
        }}
      ></Container>
    </>
  );
};

export default About;
