import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("i.e., when it’s rendered the first time");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
