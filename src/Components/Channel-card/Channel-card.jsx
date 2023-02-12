import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function ChannelCard({ videos }) {
  if (!videos?.snippet?.channelId) return <Loader />;
  console.log(videos);

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: { xs: "356px", md: "300px" },
        height: "326px",
      }}
    >
      <Link to={`/channel/${videos.snippet.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={videos?.snippet?.thumbnails?.default.url}
            title={videos?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid e3e3e3",
            }}
          />
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            variant={"h6"}
          >
            {videos?.snippet?.title} <CheckCircle />
          </Typography>
          {videos?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(videos?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
