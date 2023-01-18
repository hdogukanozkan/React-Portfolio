import React, { memo } from "react";
import Hero from "../Component/Home/Hero";
import Skills from "../Component/Home/Skills";

const Home = () => {
  return (
    <section className="px-3 lg:px-2 xl-0">
      <Hero />
      <Skills />
    </section>
  );
};

export default memo(Home);
