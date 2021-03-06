import { useState } from "react";
import data from "../Data/Navbar";
import Menu from "../Assets/Menu.svg";
import Logo from "../Assets/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary">
      <div className="container mx-auto py-4">
        <div className="lg:flex lg:justify-between lg:items-center max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between lg:px-0 px-6">
              <img src={Logo} alt="logo" className="w-[60px] h-[60px]" />
              <div className="flex lg:hidden">
                <button onClick={() => setOpen(!open)}>
                  <img src={Menu} alt="" />
                </button>
              </div>
            </div>
            <div
              className={
                open
                  ? "flex flex-col pl-6 mt-3 space-y-3 lg:hidden"
                  : "lg:flex lg:flex-row lg:items-center hidden ml-16"
              }
            >
              {data.map((item) => {
                return (
                  <a
                    href="/"
                    className="lg:py-2 lg:px-3 px-1.5 py-0.5 text-base font-medium text-white"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div
            className={
              open
                ? "flex justify-center items-center lg:flex-row"
                : "lg:flex lg:justify-center lg:items-center lg:flex-row hidden"
            }
          >
            <div className="flex space-x-4 items-center">
              <a href="https://twitter.com/MotherEarthNFT">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 15 14"
                  fill="none"
                >
                  <path
                    d="M15 1.506a7.57 7.57 0 0 1-1.51 1.726v.46c0 .92-.109 1.84-.325 2.646-.215.92-.647 1.725-1.079 2.53a16.62 16.62 0 0 1-1.726 2.186c-.756.69-1.619 1.15-2.482 1.496-.972.345-2.05.575-3.13.575-1.726 0-3.345-.575-4.748-1.495h.755c1.403 0 2.806-.46 3.885-1.381-.647 0-1.295-.23-1.834-.69-.54-.46-.864-.92-1.08-1.61h.54c.324 0 .54 0 .864-.116-.648-.115-1.295-.575-1.727-1.15C.755 6.108.54 5.417.54 4.612c.431.23.97.345 1.402.46a5.298 5.298 0 0 1-1.079-1.15c-.216-.46-.431-1.036-.431-1.61C.432 1.735.54 1.16.863.7A8.265 8.265 0 0 0 3.67 3.116c1.08.576 2.266.92 3.561 1.036 0-.23-.108-.46-.108-.805 0-.69.216-1.266.54-1.841C7.986.93 8.525.586 9.065.24c.54-.23 1.187-.345 1.834-.115.648.115 1.187.46 1.619.92.647-.114 1.403-.344 1.942-.805-.215.806-.755 1.38-1.402 1.841.755-.115 1.402-.23 1.942-.575Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="https://discord.io/MotherEarthNFT">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 71 55"
                  fill="none"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378 31.17 31.17 0 0 0 1.1-.862.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h71v55H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/motherearthnft.art/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#fff"
                  width="24"
                  height="24"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9Zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7Zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8Zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1-26.3 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8ZM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9-32.6 0-102.7 2.6-132.1-9-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1 0-32.6-2.6-102.7 9-132.1 7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9 32.6 0 102.7-2.6 132.1 9 19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1 0 32.6 2.7 102.7-9 132.1Z" />
                </svg>
              </a>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 293.775 293.667"
                >
                  <path
                    data-name="Path 1"
                    d="M61.055 139.819a12.45 12.45 0 0 1 12.508-12.452l20.737.068a12.467 12.467 0 0 1 12.467 12.467v78.414c2.336-.692 5.332-1.43 8.614-2.2a10.389 10.389 0 0 0 8.009-10.11V108.74a12.469 12.469 0 0 1 12.467-12.47h20.779a12.47 12.47 0 0 1 12.467 12.47v90.276s5.2-2.106 10.269-4.245a10.408 10.408 0 0 0 6.353-9.577V77.567A12.466 12.466 0 0 1 198.19 65.1h20.779a12.468 12.468 0 0 1 12.468 12.467v88.625c18.014-13.055 36.271-28.758 50.759-47.639a20.926 20.926 0 0 0 3.185-19.537A146.6 146.6 0 0 0 148.737.01C67.298-1.084-.007 65.395.001 146.844a146.371 146.371 0 0 0 19.5 73.45 18.56 18.56 0 0 0 17.707 9.173 508.86 508.86 0 0 0 14.643-1.518 10.383 10.383 0 0 0 9.209-10.306v-77.824"
                    fill="#fff"
                  />
                  <path
                    data-name="Path 2"
                    d="M60.603 265.577a146.808 146.808 0 0 0 233.172-118.741c0-3.381-.157-6.724-.383-10.049-53.642 80-152.686 117.405-232.79 128.793"
                    fill="#bfcfda"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.534 11.293c-.034-.034-.086-.034-.137-.017l-.121.052a4.244 4.244 0 0 1-1.897.43c-.034 0-.051.018-.051.035a.666.666 0 0 1-.656.535h-1.344v-1.121h.017c.086.017.155.017.241.034.57.087.845.345.966.466l.017.017a.052.052 0 0 0 .069 0c.017-.017.034-.034.069-.052.207-.138.69-.43.69-1.982 0-1.587-1.207-2.656-1.345-2.724l-.707-.052h-.017v-.448a.508.508 0 0 0 .241-.432c0-.275-.207-.5-.483-.5a.486.486 0 0 0-.483.5c0 .173.087.328.242.414v.38l-1.017-.104c-.052 0-.087.052-.052.086.172.276.638 1.138.672 2.431.035 1.207-.155 1.776-.241 1.983-.017.017-.017.035 0 .052.017.017.034.017.052.017.12-.017.327-.052.586-.069v1.12h-1.12a.685.685 0 0 1-.673-.672v-.275c0-.035-.018-.052-.052-.052H5.914c-.017 0-.052.017-.052.052v.155c0 .776.224 1.482.604 2.103.068.104.19.155.293.104l.224-.104a.658.658 0 0 1 .569 0l.241.104c.173.086.38.086.57 0l.24-.104a.658.658 0 0 1 .57 0l.24.104c.19.086.38.086.57 0l.241-.104a.658.658 0 0 1 .57 0l.24.104c.19.086.38.086.57 0l.24-.104a.658.658 0 0 1 .57 0l.241.104c.155.069.328-.018.414-.173.138-.224.259-.483.345-.724.19-.569.534-1.103 1.069-1.362.051-.017.069-.069.069-.12.034-.018.017-.07-.018-.087Zm-7.69-.38H8.81c.035 0 .052-.016.052-.05v-2.14c0-.017-.017-.034-.034-.052l-.966-.448c-.017-.017-.052 0-.069.035l-1 2.569c-.017.051.017.086.052.086ZM10 0C4.483 0 0 4.483 0 10s4.483 10 10 10 10-4.483 10-10S15.517 0 10 0Zm-.034 17.276a7.207 7.207 0 0 1-7.207-7.224c0-3.983 3.224-7.224 7.207-7.224 3.982 0 7.206 3.241 7.206 7.224-.017 4-3.241 7.224-7.206 7.224Zm4.43-6-.12.052a4.244 4.244 0 0 1-1.897.43c-.034 0-.051.018-.051.035a.666.666 0 0 1-.656.535h-1.344v-1.121h.017c.086.017.155.017.241.034.57.087.845.345.966.466l.017.017a.052.052 0 0 0 .069 0c.017-.017.034-.034.069-.052.207-.138.69-.43.69-1.982 0-1.587-1.207-2.656-1.345-2.724l-.707-.052h-.017v-.448a.508.508 0 0 0 .241-.432c0-.275-.207-.5-.483-.5a.486.486 0 0 0-.483.5c0 .173.087.328.242.414v.38l-1.017-.104c-.052 0-.087.052-.052.086.172.276.638 1.138.672 2.431.035 1.207-.155 1.776-.241 1.983-.017.017-.017.035 0 .052.017.017.034.017.052.017.12-.017.327-.052.586-.069v1.12h-1.12a.685.685 0 0 1-.673-.672v-.275c0-.035-.018-.052-.052-.052H5.914c-.017 0-.052.017-.052.052v.155c0 .776.224 1.482.604 2.103.068.104.19.155.293.104l.224-.104a.658.658 0 0 1 .569 0l.241.104c.173.086.38.086.57 0l.24-.104a.658.658 0 0 1 .57 0l.24.104c.19.086.38.086.57 0l.241-.104a.658.658 0 0 1 .57 0l.24.104c.19.086.38.086.57 0l.24-.104a.658.658 0 0 1 .57 0l.241.104c.155.069.328-.018.414-.173.138-.224.259-.483.345-.724.19-.569.534-1.103 1.069-1.362.051-.017.069-.069.069-.12 0-.035-.018-.087-.052-.104 0 0-.052-.017-.103 0Zm-7.551-.362H8.81c.035 0 .052-.017.052-.052V8.724c0-.017-.017-.034-.034-.052l-.966-.448c-.017-.017-.052 0-.069.035l-1 2.569c-.017.051.017.086.052.086Z"
                    fill="#fff"
                  />
                  <path
                    d="m8.827 8.69-.966-.448c-.017-.017-.051 0-.069.035l-1 2.569c-.017.034.018.069.052.069H8.81c.034 0 .051-.018.051-.052V8.725a.037.037 0 0 0-.034-.035Zm5.707 2.604c-.035-.035-.087-.035-.138-.018l-.12.052a4.244 4.244 0 0 1-1.897.431c-.035 0-.052.018-.052.035a.666.666 0 0 1-.655.534h-1.345v-1.12h.017c.086.017.155.017.242.034.568.086.844.345.965.466l.017.017a.052.052 0 0 0 .07 0 .237.237 0 0 1 .068-.052c.207-.138.69-.43.69-1.983 0-1.586-1.207-2.655-1.345-2.724l-.707-.052h-.017v-.448a.507.507 0 0 0 .241-.43c0-.277-.207-.5-.482-.5a.486.486 0 0 0-.483.5c0 .172.086.327.241.413v.38l-1.017-.104c-.052 0-.086.052-.052.086.173.276.638 1.138.673 2.431.034 1.207-.156 1.776-.242 1.983-.017.017-.017.034 0 .052.017.017.035.017.052.017.12-.018.327-.052.586-.07v1.121h-1.12a.685.685 0 0 1-.673-.672v-.276c0-.034-.017-.052-.052-.052H5.913c-.017 0-.052.018-.052.052v.155c0 .776.224 1.483.604 2.104.069.103.19.155.293.103l.224-.103a.658.658 0 0 1 .569 0l.241.103c.173.086.38.086.57 0l.24-.103a.658.658 0 0 1 .57 0l.241.103a.66.66 0 0 0 .569 0l.241-.103a.658.658 0 0 1 .57 0l.24.103c.19.086.38.086.57 0l.241-.103a.658.658 0 0 1 .57 0l.24.103c.156.07.328-.017.414-.172.138-.224.259-.483.345-.724.19-.57.534-1.104 1.069-1.362.052-.018.069-.07.069-.121.034-.017.017-.069-.017-.086Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <button className="bg-gradient-to-l from-[#00655b] to-[#00a231] text-white rounded-full px-5 py-2 font-medium hover:bg-opacity-80 hover:text-opacity-80">
                Connect Your Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
