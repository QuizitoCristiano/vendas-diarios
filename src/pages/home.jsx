import React from "react";
import "../styles/styles.css";

import { Logo } from "../componente/logo";
import { Headecontete } from "../componente/headecontete";
import {Logofinal} from "../componente/logofinal";
export const Home = () => {
  return (
    <>
      <Logo />
      <div className="contariner">
        <Headecontete />
        <Logofinal/>
      </div>
    </>
  );
};
