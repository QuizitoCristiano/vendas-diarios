import React, { useEffect, useRef } from "react";
import "../styles/styles.css";

import aos from "aos";
import "aos/dist/aos.css";
import { Form } from "react-router-dom";

export const Login = () => {
  useEffect(() => {
    aos.init({ duração: 1500 });
  }, []);

  return (
    <>
      <div className="container-login" data-aos="flip-left">
        <div className="div-lubi">
          <div className="wrappr-login">
            <div className="digite">
              <p>Para garantir a sua segurança faca login</p>
            </div>

            <div className="input-wrappre">
              <input
                name="email"
                type="text"
                required="required"
                autoComplete="false"
              />
              <span>Usernama</span>
              <i></i>
            </div>

            <div className="input-wrappre">
              <input name="password" type="pessword" required="required" />
              <span>pessword</span>
              <i></i>
            </div>
            <div className="mybotton">
              <div className="botao">
                <button>Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
