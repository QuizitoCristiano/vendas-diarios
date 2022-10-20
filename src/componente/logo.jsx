import React, { useState } from "react";
import "../componente/logo.css";

export const Logo = () => {
  const [a, setA] = useState(true);
  const muebotao = () => {
    setA(!a);
  };
  return (
    <>
      <div className="logo-top">
        <div className="logo-svg">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_80)" filter="url(#filter0_i_2_80)">
              <path
                opacity="0.4"
                d="M32 18V21C32 21.3714 31.8965 21.7355 31.7013 22.0514C31.506 22.3673 31.2266 22.6227 30.8944 22.7887L29.9963 23.2262C29.9963 23.1519 30 23.0775 30 23.0025C30.0022 21.1705 29.2838 19.4112 28 18.1044V18C28 11.3831 22.6169 6 16 6C9.38312 6 4 11.3831 4 18V18.1019C2.71618 19.4087 1.99781 21.168 2 23C2 23.075 2 23.1494 2.00375 23.2237L1.10563 22.7862C0.773799 22.6203 0.494656 22.3654 0.299405 22.05C0.104153 21.7345 0.000488097 21.371 0 21L0 18C0 9.15625 7.1575 2 16 2C24.8425 2 32 9.1575 32 18Z"
                fill="url(#paint0_linear_2_80)"
              />
              <path
                d="M10.5 16H9C7.14348 16 5.36301 16.7375 4.05025 18.0503C2.7375 19.363 2 21.1435 2 23C2 24.8565 2.7375 26.637 4.05025 27.9497C5.36301 29.2625 7.14348 30 9 30H10.5C10.8978 30 11.2794 29.842 11.5607 29.5607C11.842 29.2794 12 28.8978 12 28.5V17.5C12 17.1022 11.842 16.7206 11.5607 16.4393C11.2794 16.158 10.8978 16 10.5 16ZM23 16H21.5C21.1022 16 20.7206 16.158 20.4393 16.4393C20.158 16.7206 20 17.1022 20 17.5V28.5C20 28.8978 20.158 29.2794 20.4393 29.5607C20.7206 29.842 21.1022 30 21.5 30H23C24.8565 30 26.637 29.2625 27.9497 27.9497C29.2625 26.637 30 24.8565 30 23C30 21.1435 29.2625 19.363 27.9497 18.0503C26.637 16.7375 24.8565 16 23 16V16Z"
                fill="url(#paint1_linear_2_80)"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_2_80"
                x="0"
                y="0"
                width="32"
                height="32"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.2 0 0 0 0 0.74902 0 0 0 0 0.188235 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_2_80"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2_80"
                x1="16"
                y1="2"
                x2="16"
                y2="23.2262"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3CA63A" stop-opacity="0.8" />
                <stop offset="1" stop-color="#2FDA2B" stop-opacity="0.4" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_80"
                x1="16"
                y1="16"
                x2="16"
                y2="30"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3CA63A" stop-opacity="0.8" />
                <stop offset="1" stop-color="#2FDA2B" stop-opacity="0.4" />
              </linearGradient>
              <clipPath id="clip0_2_80">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {a ? (
          <div className="logo-links">
            <a className="link1" href="#">
              Home
            </a>
            <a className="link2" href="#">
              Produtos
            </a>
            <a className="link3" href="#">
              Comprar
            </a>
            <a href="#">Contato</a>
          </div>
        ) : null}
        <div className="logo-icons">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6693 20.7495L18.9963 16.0766C18.7854 15.8656 18.4995 15.7485 18.1995 15.7485H17.4356C18.7292 14.0939 19.4979 12.0129 19.4979 9.74905C19.4979 4.36364 15.1342 0 9.7488 0C4.36339 0 -0.000244141 4.36364 -0.000244141 9.74905C-0.000244141 15.1345 4.36339 19.4981 9.7488 19.4981C12.0126 19.4981 14.0937 18.7294 15.7482 17.4358V18.1998C15.7482 18.4998 15.8654 18.7857 16.0763 18.9966L20.7493 23.6696C21.1899 24.1101 21.9023 24.1101 22.3382 23.6696L23.6646 22.3431C24.1052 21.9026 24.1052 21.1901 23.6693 20.7495ZM9.7488 15.7485C6.43507 15.7485 3.74939 13.0675 3.74939 9.74905C3.74939 6.43531 6.43038 3.74963 9.7488 3.74963C13.0625 3.74963 15.7482 6.43062 15.7482 9.74905C15.7482 13.0628 13.0672 15.7485 9.7488 15.7485Z"
              fill="white"
            />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_95)">
              <path
                opacity="0.4"
                d="M0.85994 9.85716V9.85194L4.71708 9.85435V8.56863C4.71949 5.73283 7.02775 3.42859 9.86356 3.42859C12.6994 3.42859 15.0064 5.73846 15.0032 8.57426V9.85716H12.4318V8.57145C12.4322 7.88946 12.1617 7.23524 11.6798 6.7527C11.1978 6.27016 10.5439 5.99884 9.86195 5.99841C9.17996 5.99798 8.52574 6.26849 8.0432 6.75043C7.56067 7.23236 7.28934 7.88625 7.28891 8.56823V9.85395H9.86034L0.85994 9.85716Z"
                fill="white"
              />
              <path
                d="M0.859716 9.85193L0.853287 20.7805C0.853023 21.2026 0.935902 21.6206 1.09719 22.0107C1.25848 22.4008 1.49502 22.7553 1.79331 23.0539C2.09159 23.3526 2.44579 23.5896 2.83566 23.7514C3.22553 23.9131 3.64345 23.9965 4.06556 23.9968L15.637 24.0032C16.4895 24.0032 17.307 23.6646 17.9098 23.0618C18.5126 22.459 18.8513 21.6414 18.8513 20.7889L18.8577 9.86037L0.859716 9.85193ZM6.00016 13.3905C5.80944 13.3905 5.623 13.3339 5.46443 13.2279C5.30585 13.122 5.18226 12.9714 5.10927 12.7952C5.03629 12.619 5.01719 12.4251 5.0544 12.238C5.09161 12.051 5.18345 11.8792 5.3183 11.7443C5.45316 11.6095 5.62498 11.5176 5.81203 11.4804C5.99909 11.4432 6.19297 11.4623 6.36917 11.5353C6.54537 11.6083 6.69597 11.7319 6.80193 11.8904C6.90789 12.049 6.96444 12.2355 6.96444 12.4262C6.96444 12.6819 6.86285 12.9272 6.68201 13.108C6.50117 13.2889 6.2559 13.3905 6.00016 13.3905ZM13.7144 13.3953C13.5237 13.3953 13.3373 13.3387 13.1787 13.2328C13.0201 13.1268 12.8965 12.9762 12.8235 12.8C12.7506 12.6238 12.7315 12.4299 12.7687 12.2429C12.8059 12.0558 12.8977 11.884 13.0326 11.7491C13.1674 11.6143 13.3393 11.5224 13.5263 11.4852C13.7134 11.448 13.9072 11.4671 14.0834 11.5401C14.2596 11.6131 14.4102 11.7367 14.5162 11.8953C14.6222 12.0538 14.6787 12.2403 14.6787 12.431C14.6787 12.6867 14.5771 12.932 14.3963 13.1128C14.2154 13.2937 13.9702 13.3953 13.7144 13.3953Z"
                fill="white"
              />
            </g>
            <circle cx="17.1428" cy="6.85714" r="6.85714" fill="#E35656" />
            <path
              d="M14.9549 11V9.872H16.6589V4.856H15.2549V3.992C15.6389 3.92 15.9669 3.836 16.2389 3.74C16.5189 3.636 16.7789 3.512 17.0189 3.368H18.0509V9.872H19.5509V11H14.9549Z"
              fill="white"
            />
            <defs>
              <clipPath id="clip0_2_95">
                <rect
                  width="18"
                  height="20.5714"
                  fill="white"
                  transform="translate(0.857178 3.42859)"
                />
              </clipPath>
            </defs>
          </svg>
          <div onClick={muebotao} className="menuItens">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="16"
                height="3"
                rx="1.5"
                transform="matrix(-1 0 0 1 23.9999 5)"
                fill="white"
              />
              <rect
                width="24"
                height="3"
                rx="1.5"
                transform="matrix(-1 0 0 1 23.9999 11)"
                fill="white"
              />
              <rect
                width="8"
                height="3"
                rx="1.5"
                transform="matrix(-1 0 0 1 23.9999 17)"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};