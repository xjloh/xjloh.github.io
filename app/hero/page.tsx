import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <section id="profile" className="flex justify-center">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-center">Hello, I&apos;m</p>
          <h1 className="text-5xl text-center font-bold">Loh Xin Jun</h1>
          <p className="font-semibold text-3xl text-center">
            Full-stack developer
          </p>
          <div className="flex justify-center gap-[1rem]">
            <div className="dropdown border-2 border-solid border-black">
              <div className="font-semibold p-4 w-[10rem] text-center">
                Resume
              </div>
              <div className="dropdown-content">
                {/* <div onclick="window.open('./assets/xjl-resume-modern.pdf')">Modern</div> */}
                {/* <div onclick="window.open('./assets/xjloh-resume-traditional.pdf')">Traditional</div> */}
              </div>
            </div>
            <div className="border-2 border-solid border-black font-semibold p-4 w-[10rem] text-center">
              Contact info
            </div>
          </div>
          {/* <div class="resume-mobile">
              <div class="dropdown resume-dropdown-mobile btn btn-color-2">
                <div class="resume-mobile-btn">
                  <div>Resume</div>
                  <div class="resume-expand-indicator">
                    >
                  </div>
                </div>
                <div class="dropdown-content hide">
                  <div style="border-bottom: 1px solid #ddd;" onclick="window.open('./assets/xjl-resume-modern.pdf')">Modern</div>
                  <div onclick="window.open('./assets/xjloh-resume-traditional.pdf')">Traditional</div>
                </div>
              </div>
              <div class="btn-color-1 btn" onclick="scrollToSection('section#contact')">Contact info</div>
            </div> */}
          {/* <div id="socials-container"> */}
          {/* <img src="./assets/linkedin-logo.png" alt="LinkedIn profile" class="icon" onclick="window.open('https://www.linkedin.com/in/jamiexjloh/', '_blank')">
                <img src="./assets/github-logo.png" alt="GitHub profile" class="github-icon icon" target="_blank" onclick="window.open('https://github.com/xjloh', '_blank')">
                <img src="./assets/github-logo-white.png" alt="GitHub profile" class="github-icon-dark icon hide" target="_blank" onclick="window.open('https://github.com/xjloh', '_blank')"> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
