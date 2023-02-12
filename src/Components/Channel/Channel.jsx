import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Apiservise } from "../../Servise/api.servise";
import { ChannelCard } from "../index";

function Channel() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await Apiservise.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return (
    <Box>
      <Box>
        <ChannelCard videos={channelDetail} />
      </Box>
    </Box>
  );
}

export default Channel;
