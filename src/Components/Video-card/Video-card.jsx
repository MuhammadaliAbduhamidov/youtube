import { CheckCircle } from "@mui/icons-material";
import {
  Card,
  Avatar,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../Constant/colors";

function VideoCard({ video }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "350px", md: "300px" },
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snipet?.title}
          sx={{ height: "170px", cursor: "pointer" }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: "220px",
          position: "relative",
        }}
      >
        <>
          <Typography my={"5px"} opacity={".4"}>
            {moment(video?.snippet?.publishedAt)?.fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" opacity={".6"}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" fontSize={"12px"} color={"gray"}>
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
