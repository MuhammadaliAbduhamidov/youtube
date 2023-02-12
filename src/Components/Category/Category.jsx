import { Stack } from "@mui/material";
import React from "react";
import { category } from "../Constant/category";
import { colors } from "../Constant/colors";

function Category({ selectedCategoryHandle, selectedCategory }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          style={{
            borderRadius: "0",
            background: selectedCategory === item.name && colors.secondary,
            color: selectedCategory === item.name && "#fff",
          }}
          className="category-btn"
          onClick={() => selectedCategoryHandle(item.name)}
        >
          <span
            style={{
              color: colors.secondary,
              marginRight: "7px",
              color: selectedCategory === item.name && "#fff",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: 1 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Category;
