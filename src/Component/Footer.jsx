import React, { memo } from "react";
import { GiAncientSword } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="select-none w-full font-bold text-xl py-4 flex items-center justify-center">
      Created by H.DoğukanÖzkan @2023{" "}
      <GiAncientSword className="ml-2 text-5xl " />
    </footer>
  );
};

export default memo(Footer);
