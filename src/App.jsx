import { useState } from "react";
import "./index.css";
import Spline from "@splinetool/react-spline";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    "AI Integration",
    "Voice Data",
    "Chatbots",
    "Data Collection",
    "ML",
    "Business Management",
    "Development",
  ];

  const projects = [
    {
      title: "Voice Data Collection",
      description: `High-quality multilingual datasets that enhance AI training efficiency.`,
      image:
        "https://files.oaiusercontent.com/file-7CAKWrBerizQKUSXJDjBGD?se=2024-12-22T09%3A10%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7165a4fa-ce13-4404-9fec-d2169b4273e6.webp&sig=u50TFsE2OqOt6jrG3v892WRsrcjqkTjB3tHVH2maqEg%3D",
      link: "https://free-war-fb9.notion.site/Voice-Data-Collection164376631960805580a5e804c7fa6d27?pvs=4",
    },
    {
      title: "Custom Chatbots",
      description: `Conversational AI solutions tailored for businesses.`,
      image:
        "https://www.plego.com/wp-content/uploads/2021/11/chatbot3-1024x652.jpg",
      link: "https://free-war-fb9.notion.site/Custom-Chatbots-16437663196080d4b8c8e6041d393610?pvs=4",
    },
    {
      title: "Automation Solutions",
      description: `End-to-end platforms for streamlining operations`,
      image:
        "https://media.istockphoto.com/id/1367967285/photo/automation-software-technology-process-system-business-concept.jpg?s=612x612&w=0&k=20&c=VnRZHYgIfInFhaShiStMroW7PnVyvAC4C9SodjBf4ns=",
      link: "https://free-war-fb9.notion.site/Automation-Solutions1643766319608042ad1ad2f73f880e18?pvs=4 ",
    },
    {
      title: "Website Development",
      description: `Modern, responsive websites to establish your online presence.`,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl_6AuG1TxzQdGmZSN4pF02iLepIl6-4ucQ&s",
      link: "https://free-war-fb9.notion.site/Website-Development16437663196080059302c01f3c9fe87f?pvs=4",
    },
    {
      title: "Social Media Growth",
      description: `Strategies and tools to boost engagement andvisibility`,
      image:
        "https://recurpost.com/wp-content/uploads/2022/05/good-thing-about-social-media-1024x576.png",
      link: "https://free-war-fb9.notion.site/Automation-Solutions1643766319608042ad1ad2f73f880e18?pvs=4 ",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row text-white w-full bg-[#000] h-full md:h-screen gap-4 p-3 md:p-6">
      <div className="flex flex-col md:gap-4 w-full md:w-1/4 justify-between">
        <div className="flex-0 h-auto md:h-2/3 flex flex-col border border-[#101010] justify-between bg-[#101010] p-5 rounded-[23px]">
          <h1 className=" text-3xl md:text-[4.5rem] tracking-tighter   leading-tight md:leading-[5rem] mb-4">
            Hello! <br /> I{"'"}m{" "}
            <span className="font-bold text-4xl md:text-[5.5rem]">Bart</span>
          </h1>
          <p className="mb-6 text-[#FFFFFFB3] text-[0.8vw] max-w-full md:max-w-[95%] font-[500]">
            The founder of{" "}
            <span className="text-white">ApexBart Solutions</span>. I specialize
            in delivering complete, end-to-end solutions in voice data,
            chatbots, and digital transformation. With experience managing 20+
            multilingual voice recording projects and building AI-powered tools,
            I bridge the gap between humans and technology to help businesses
            scale globally.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((e) => (
              <span
                key={e}
                className="border cursor-pointer text-[0.56vw] border-slate-400 hover:bg-gray-700 hover:bg-opacity-[30%] transition-all duration-700 px-3 py-1 rounded-[24px]"
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
          <div id="Location" className="p-5">
            <p className="font-bold text-[1.2rem]">Singapore, SG</p>
            <p className="text-[#FFFFFFB3] text-[0.9rem] font-[500]">
              15:37 GMT+8 Local time
            </p>
          </div>
          <div className="h-full flex items-center justify-center">
            <div
              id="oq_nuqta"
              className="w-2 h-2 mr-[70px] mt-[25px] md:mt-0 bg-white rounded-full"
            ></div>
          </div>
        </div>
        <div className="flex-0 bg-[#101010] border border-[#101010] p-5 rounded-[23px] h-[14%] items-center flex justify-between mt-4 md:mt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-[16px] max-h-[56px] w-[65%] hover:shadow-white shadow-md transition-all duration-700 rounded-[30px] bg-white text-black text-center text-[1.1rem] font-[700]"
          >
            Contact me
          </button>
          <a href="https://free-war-fb9.notion.site/Professional-Portfolio-Bart-16137663196080489062f257bb6773fc?pvs=4">
            <button className="bg-[#ffffff1a]  max-h-[56px] py-[16px] font-bold text-[0.8rem] rounded-[30px] px-[34px] hover:border hover:border-white transition-all duration-700 hover:bg-opacity-[50%]">
              GET MY CV
            </button>
          </a>
        </div>
      </div>
      <div className="h-[650px] md:h-full border bg-[#101010] border-[#101010] w-full md:w-1/2 p-5 rounded-[23px]">
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
                <a href={"https://t.me/whynotbart"}>
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
                  href="https://www.instagram.com/cobrabart/"
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
                  href="https://x.com/apexbart"
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
                  href="https://medium.com/@bartyanyan"
                  className="flex flex-col items-center"
                >
                  <img
                    src="/medium.png"
                    className="bg-white rounded-[7px] w-[48px] h-[48px]"
                    alt=""
                  />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Medium
                  </div>
                </a>
              </div>
            </div>
            <div className="hexagonArea translate-y-[-48px]">
              <div className="hexagon group">
                <a href="/qr.png" className="flex flex-col items-center">
                  <img src="/weChat.png" className="w-[48px] h-[48px]" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    WeChat
                  </div>
                </a>
              </div>
              <div className="hexagon group">
                <a
                  href="https://www.facebook.com/profile.php?id=61550044081295"
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
                    <span className="text-[#FFFFFFB3] text-[0.8rem]">
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
            <button
              onClick={setIsModalOpen(false)}
              className="w-full py-2 bg-red-500 text-white backrounded-xl font-bold"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
