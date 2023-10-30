import React from "react";
import { Link as MuiLink } from "@mui/material";
import Link from "next/link";

const StyledLink = ({ url, text }: { url: string; text: string }) => {
  return (
    <MuiLink component={Link} href={url}>
      {text}
    </MuiLink>
  );
};

export default StyledLink;
