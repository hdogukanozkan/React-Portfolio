import React, { memo } from "react";
import Hero from "../Component/Projects/Hero";
import Content from "../Component/Projects/Content";

const Projects = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default memo(Projects);
