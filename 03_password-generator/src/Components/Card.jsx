import React, { memo } from "react";

const Card = ({ add }) => {
  console.log("hii");
  return (
    <>
      <h1>this is card component</h1>
      <button onClick={add}>add</button>
    </>
  );
};

export default memo(Card);
