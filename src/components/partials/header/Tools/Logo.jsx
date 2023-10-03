import React from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { Link } from "react-router-dom";
import useWidth from "@/hooks/useWidth";
import LogoMuni from "../../../../assets/images/logo/edja.jpg"
const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link to="/estudiantes">
        {width >= breakpoints.xl ? (
          <img src={LogoMuni} alt="" className="w-10 rounded-md"/>
        ) : (
          <img src={LogoMuni} alt="" className="w-10 rounded-md"/>
        )}
      </Link>
    </div>
  );
};

export default Logo;
