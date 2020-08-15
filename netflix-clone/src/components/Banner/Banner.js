import React, { useState, useEffect } from "react";

import axios from "../../api/axios";
import requests from "../../api/requests";

function Banner() {
  cont[(movie, setMovie)] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
    }
    fetchData();
  }, []);

  return (
    <header>
      <div></div>
    </header>
  );
}

export default Banner;
