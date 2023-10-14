import React, { useState, useEffect } from "react";
import { fetchData, fetchDataGet } from "../services/apiServices";
import WordCloudGraph from "./WordCloud.jsx";
import Sentiment from "./Sentmints";

import {FcAssistant} from 'react-icons/fc';

const Content = () => {
  const [data, setData] = useState({ data: [] });
  const [hashtag, setHashtag] = useState("");

  const endpoint = "http://localhost:8000/home/hashtags";

  const loadData = async () => {
    try {
      const result = await fetchData(endpoint, {
        hashtag,
      });
      setData(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="bg-redditDark text-light p-4">
      <img src="https://cdn-icons-png.flaticon.com/512/3670/3670226.png" className="hover:animate-spin-slow" width={100} height="100px" ></img>
      <h1 className="text-4xl mb-6 font-semibold">Subreddit Analyzer</h1>
      <div className="mb-4">
        <input
          type="text"
          name="hash"
          placeholder="Enter hashtag"
          className="input-dark mr-6"
          onChange={(event) => setHashtag(event.target.value)}
        />
        <button className="button-dark" onClick={loadData}>
          Generate
        </button>
      </div>
      <div className="card-dark align-middle w-full text-center">
        <h1 className="text-2xl font-semibold">Sentiments</h1>
        <Sentiment data={data} />
        <h1 className="text-2xl font-semibold">Word Cloud</h1>
        <WordCloudGraph data={data} />
      </div>
    </div>
  );

};

export default Content;
