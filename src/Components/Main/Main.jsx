import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { colors } from "../Constant/colors";
import { Category, Videos } from "../index";
import { Apiservise } from "../../Servise/api.servise";

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandle = (category) => setSelectedCategory(category);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await Apiservise.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [selectedCategory]);

  return (
    <Stack>
      <Category
        selectedCategoryHandle={selectedCategoryHandle}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos video={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
