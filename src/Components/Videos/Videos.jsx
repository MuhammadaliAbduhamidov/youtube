import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, Loader } from "../index";

function Videos({ video }) {
  if (!video?.length) return <Loader />;

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"start"}
      gap={2}
    >
      {video?.map((item, index) => (
        <Box key={index}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard videos={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
