import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import DarkLogoImageUrl from "@site/static/img/logo.png";
import LightLogoImageUrl from "@site/static/img/log-hero-light.png";

export const HeroLogo = () => {
  const { isDarkTheme } = useColorMode();

  return (
    <img
      src={isDarkTheme ? DarkLogoImageUrl : LightLogoImageUrl}
      className="floating"
      height={isDarkTheme ? "600" : "520"}
      width={isDarkTheme ? "487" : "417"}
    />
  );
};
