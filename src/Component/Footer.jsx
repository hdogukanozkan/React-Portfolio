import React, { memo } from "react";
import { GiAncientSword } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="footbar">
      Created by H.DoğukanÖzkan @2023{" "}
      <GiAncientSword className="ml-2 text-3xl lg:text-5xl" />
    </footer>
  );
};

export default memo(Footer);
