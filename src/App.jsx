import React, { useState } from "react";
import "./index.css";
import Spline from "@splinetool/react-spline";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = ["32 y.o.", "UX/UI", "Web 3D", "Spline", "Figma", "Framer"];

  const projects = [
    {
      title: "Spline Design Course",
      description: "Learn how to create web 3D",
      image:
        "https://framerusercontent.com/images/0wsUlAG6fOuWGIlB79WJjB7OFU.jpg",
      link: "https://apexbart.xyz",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row text-white w-full bg-[#000] h-full md:h-screen gap-4 p-3 md:p-6">
      <div className="flex flex-col md:gap-4 w-full md:w-1/4 justify-between">
        <div className="flex-0 h-auto md:h-2/3 flex flex-col border border-[#101010] justify-between bg-[#101010] p-5 rounded-[23px]">
          <h1 className="text-4xl md:text-[5.5rem] tracking-tighter font-[750] leading-tight md:leading-[5rem] mb-4">
            Hello! <br /> I{"'"}m Max
          </h1>
          <p className="mb-6 text-[#FFFFFFB3] text-[1rem] max-w-full md:max-w-[95%] font-[500]">
            <span className="text-white">Product Designer</span> with 10+ years
            of production experience in various business areas. Experienced in
            creating design solutions for mobile, websites, and services.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((e) => (
              <span
                key={e}
                className="border cursor-pointer text-[12px] border-slate-400 hover:bg-gray-700 hover:bg-opacity-[30%] transition-all duration-700 px-3 py-1 rounded-[24px]"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
        <div
          className="flex-0 bg-[#101010] border border-[#101010] flex justify-between rounded-[23px] h-1/6 bg-cover bg-center mt-4 md:mt-0"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/HFLO9jxwhZXs3FhX4jM8zPTcs.png')",
          }}
        >
          <div className="p-5">
            <p className="font-bold text-[1.2rem]">Amsterdam, NL</p>
            <p className="text-[#FFFFFFB3] text-[0.9rem] font-[500]">
              09:58 GMT+1 Local time
            </p>
          </div>
          <div className="h-full flex items-center justify-center">
            <div
              id="oq_nuqta"
              className="w-2 h-2 mr-[70px] mt-[25px] md:mt-0 bg-white rounded-full"
            ></div>
          </div>
        </div>
        <div className="flex-0 bg-[#101010] border border-[#101010] p-5 rounded-[23px] h-1/6 flex justify-between mt-4 md:mt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-[16px] w-[65%] hover:shadow-white shadow-md transition-all duration-700 rounded-[30px] bg-white text-black text-center text-[1.1rem] font-[700]"
          >
            Contact me
          </button>
          <button className="bg-[#ffffff1a] py-[16px] font-bold text-[1.1rem] rounded-[30px] px-[34px] hover:border hover:border-white transition-all duration-700 hover:bg-opacity-[50%]">
            CV
          </button>
        </div>
      </div>
      <div className="h-full border bg-[#101010] border-[#101010] w-full md:w-1/2 p-5 rounded-[23px]">
        <Spline
          scene="https://prod.spline.design/cSx-xLZzhArfk7bC/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            borderRadius: "23px",
          }}
        />
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4 justify-between">
        <div
          id="logos"
          className="flex-0 min-h-[58%] pt-5 md:pb-0 flex flex-col border rounded-[23px] bg-[#101010] border-[#101010] items-center justify-center"
        >
          <div className="containerr">
            <div className="hexagonArea">
              <div className="hexagon group">
                <a href={"https://web.telegram.org/"}>
                  <img
                    src="/telegram.png"
                    className="w-[48px] h-[48px]"
                    alt=""
                  />
                </a>
                <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                  Telegram
                </div>
              </div>
              <div className="hexagon group">
                <a
                  href="https://www.instagram.com/"
                  className="flex flex-col items-center"
                >
                  <img src="/insta.png" className="w-[48px] h-[48px]" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Instagram
                  </div>
                </a>
              </div>
            </div>
            <div className="hexagonArea lasta">
              <div className="hexagon group">
                <a
                  href="https://x.com/home?lang=ru"
                  className="flex flex-col items-center"
                >
                  <img src="/twitterr.svg" className="" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Twitter
                  </div>
                </a>
              </div>
              <div className="hexagon group">
                <a
                  href="https://apexbart.xyz"
                  className="flex flex-col items-center"
                >
                  <img src="/logo.svg" className="w-[48px] h-[48px]" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    ApexBart
                  </div>
                </a>
              </div>
              <div className="hexagon group">
                <a
                  href="https://www.linkedin.com/"
                  className="flex flex-col items-center"
                >
                  <img
                    src="/linkidin.png"
                    className="w-[48px] h-[48px]"
                    alt=""
                  />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Linkedin
                  </div>
                </a>
              </div>
            </div>
            <div className="hexagonArea translate-y-[-48px]">
              <div className="hexagon group">
                <a
                  href="https://ibb.co/whF9K7F"
                  className="flex flex-col items-center"
                >
                  <img src="/weChat.png" className="w-[48px] h-[48px]" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    WeChat
                  </div>
                </a>
              </div>
              <div className="hexagon group">
                <a
                  href="https://www.facebook.com/"
                  className="flex flex-col items-center"
                >
                  <img
                    src="/facebook.png"
                    className="w-[48px] bg-white rounded-[7px] h-[48px]"
                    alt=""
                  />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Facebook
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-0 min-h-[38%] border rounded-[23px] p-6 bg-[#101010] border-[#101010] overflow-y-auto">
          <h3 className="text-[1.2rem] font-bold text-[#FFFFFF] mb-4">
            Latest projects
          </h3>

          <div className="flex flex-col gap-3">
            {projects.map((e, i) => (
              <a key={i} href={e.link}>
                <div className="flex gap-3 relative group cursor-pointer rounded-[12px] p-[8px] hover:bg-[#2e2e2e] transition-all duration-700 items-center">
                  <div className="absolute top-5 hidden group-hover:block left-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(246,241,241,1)"
                    >
                      <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                    </svg>
                  </div>
                  <img
                    src={e.image}
                    className="w-[56px] group-hover:bg-black group-hover:bg-opacity-[30%] rounded-[12px] h-[56px]"
                    alt=""
                  />
                  <div className="flex flex-col ">
                    <span className="font-bold">{e.title}</span>
                    <span className="text-[#FFFFFFB3]">
                      {e.description}
                    </span>{" "}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed framer inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1a1a1a] p-4 md:p-12 rounded-[32px] shadow-lg max-w-[340px] md:max-w-[500px] w-full">
            <h2 className="text-[2rem] md:text-[5rem] font-bold text-center mb-4">
              Say hi!
            </h2>
            <p className="mb-8 text-[#FFFFFFB3] md:text-center">
              Approximate response time: 1-2 days.
            </p>
            <form onSubmit={() => setIsModalOpen(false)}>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full p-3 mb-4 bg-[#333] rounded-xl"
              />
              <textarea
                required
                placeholder="How can I help you?"
                className="w-full p-3 mb-4 bg-[#333] rounded-xl"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-white text-black rounded-xl font-bold"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
