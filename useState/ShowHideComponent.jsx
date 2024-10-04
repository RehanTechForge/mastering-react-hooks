import React, { useState } from "react";

const ShowHideComponent = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>Show Paragraph Button Toggler</h1>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore
          voluptate ullam fuga labore cum. Nesciunt beatae iste repellat,
          laboriosam ea nihil? Quas in, cupiditate pariatur nobis sit cum
          quidem?
        </p>
      )}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default ShowHideComponent;
