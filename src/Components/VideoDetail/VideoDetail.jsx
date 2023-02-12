import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Apiservise } from "../../Servise/api.servise";
import { Loader, Videos } from "../index";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [reletedVideo, setReletedVideo] = useState([]);

  useEffect(() => {
    try {
      const getDate = async () => {
        const data = await Apiservise.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data[0]);
        const reletedData = await Apiservise.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setReletedVideo(reletedData);
      };
      getDate();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  if (!videoDetail?.snippet) return <Loader />;

  return (
    <Box minHeight={"90vh"} mb={10}>
      
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            controls
            className="react-player"
            url={`https//www.youtube.com/watch?v=${id}`}
          />
          {videoDetail.snippet.tags?.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              variant={"outlined"}
              deleteIcon={<Tag />}
            />
          ))}
          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {videoDetail.snippet.title}
          </Typography>
          <Typography
            variant="subtitle2"
            p={2}
            sx={{ opacity: ".7" }}
            fontWeight={"bold"}
          >
            {videoDetail.snippet.description}
          </Typography>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              sx={{ opacity: ".7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {videoDetail.statistics.viewCount} views
            </Stack>
            <Stack
              sx={{ opacity: ".7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <FavoriteOutlined />
              {videoDetail.statistics.likeCount} likes
            </Stack>
            <Stack
              sx={{ opacity: ".7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <MarkChatRead />
              {videoDetail.statistics.commentCount} comments
            </Stack>
          </Stack>
          <Link to={`/channel/${videoDetail.snippet.channelId}`}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"5px"}
              marginTop={"5px"}
              px={2}
            >
              <Avatar src={videoDetail?.snippet?.thumbnails?.default?.url} />
              <Typography variant="subtitle2" fontSize={"12px"} color={"gray"}>
                {videoDetail?.snippet?.channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Stack>
          </Link>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ xs: 5, md: 1 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos video={reletedVideo} />
        </Box>
      </Box>
    </Box>
  );
}

export default VideoDetail;
