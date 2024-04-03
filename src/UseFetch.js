import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
const UseFetch = (Url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(Url);
        setData(response.data);
      } catch (err) {
        setData(null);
      }
    })();
  }, [Url]);

  return data;
};
export default UseFetch;
