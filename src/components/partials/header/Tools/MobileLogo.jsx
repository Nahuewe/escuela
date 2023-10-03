import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import LogoMuni from "@/assets/images/logo/edja.jpg"
const MobileLogo = () => {
  const [isDark] = useDarkMode();
  return (
    <Link to="/">
      <img src={LogoMuni} alt="" />
    </Link>
  );
};

export default MobileLogo;
