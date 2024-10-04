import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const posts = await resp.json();

      if (posts && posts.length > 0) setData(posts);
    }
    getData();
  }, []);
  return <div>{data[0]?.title}</div>;
};

export default FetchDataEffect;
