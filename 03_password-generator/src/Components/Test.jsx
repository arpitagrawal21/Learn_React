import React, { memo } from "react";

const Test = () => {
  console.log("test");
  return (
    <>
      <p>test</p>
    </>
  );
};

export default memo(Test);
