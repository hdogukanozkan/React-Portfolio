import React from "react";
import workImg from "./working-img.svg";

const Hero = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row gap-2 max-w-6xl mx-auto select-none px-2 lg:px-4 mb-10 lg:mb-5">
      <div className="flex-1 w-full">
        <img
          src={workImg}
          className="w-full h-auto select-none"
          draggable="false"
          alt=""
        />
      </div>
      <div className="flex-1 w-full">
        <h1 className="text-5xl font-bold mb-6">Projects</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          distinctio ullam asperiores a quod voluptas molestias fugiat molestiae
          ad numquam. Voluptas, sint aperiam! Perspiciatis assumenda cupiditate
          voluptate, quod corrupti placeat voluptatum quaerat iste. Eius
          sapiente mollitia vero doloribus totam, aperiam quos nobis ab possimus
          suscipit ducimus nostrum velit molestias porro!{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
