import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Apiservise } from "../../Servise/api.servise";
import { colors } from "../Constant/colors";
import { Videos } from "../index";

function Search() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await Apiservise.fetching(`search?part=snippet&q=${id}`);
        setVideos(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search result for{" "}
          <span style={{ color: colors.secondary }}>{id}</span> videos
        </Typography>
        <Videos video={videos} />
      </Container>
    </Box>
  );
}

export default Search;
