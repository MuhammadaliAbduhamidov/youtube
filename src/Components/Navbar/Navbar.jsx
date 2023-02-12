import { Stack, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../Constant/index";
import { colors } from "../Constant/colors";
import { SearchBar } from "../index";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: "999",
        background: colors.primary,
        padding: "20px",
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
