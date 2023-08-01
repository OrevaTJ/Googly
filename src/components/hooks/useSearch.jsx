import React, { useState, useEffect } from "react";
import axios from "axios";

const BaseUrl = 'https://customsearch.googleapis.com/customsearch/v1'

const API_KEY = import.meta.env.VITE_SEARCH_KEY;
const ENGINE_KEY = import.meta.env.VITE_SEARCH_ENGINE_KEY;


export const useSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            `${BaseUrl}?key=${API_KEY}&cx=${ENGINE_KEY}&q=${term}`
          );
          console.log(response);
          setData(response?.data);
          console.log(`set data ${data}`);
        } catch (error) {
          console.error(error);
        }
      }
      // const fetchData = async () => {
      //     const response = await axios.get(
      //         `${BaseUrl}?key=${API_KEY}&cx=${ENGINE_KEY}&q=${term}`
      //     );
      //     setData(response?.data);
      // };
      fetchData();
    }, [term]);
    console.log(`data ${data}`);
    return (
      data
    );
};
