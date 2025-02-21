import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero section */}
      <section
        id="profile"
        className="flex justify-center flex-stretch h-screen"
      >
        <div className="flex flex-col gap-2 self-center">
          <p className="font-semibold text-center">Hello, I&apos;m</p>
          <h1 className="text-5xl text-center font-bold">Loh Xin Jun</h1>
          <p className="font-semibold text-3xl text-center">
            Full-stack developer
          </p>
          <div className="flex justify-center gap-[1rem]">
            <div className="dropdown border-2 border-solid border-primary bg-secondary">
              <div className="font-semibold p-4 w-[10rem] text-center">
                Resume
              </div>
              <div className="dropdown-content">
                {/* <div onclick="window.open('./assets/xjl-resume-modern.pdf')">Modern</div> */}
                {/* <div onclick="window.open('./assets/xjloh-resume-traditional.pdf')">Traditional</div> */}
              </div>
            </div>
            <div className="border-2 border-solid border-primary font-semibold p-4 w-[10rem] text-center bg-primary text-secondary">
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
          <div className="flex justify-center gap-[1rem] mt-[1rem]">
            <Link
              href={"https://www.linkedin.com/in/jamiexjloh/"}
              target="_blank"
            >
              <Image
                src="/linkedin-logo.png"
                width={34}
                height={32}
                alt="LinkedIn logo"
              ></Image>
            </Link>
            <Link href={"https://github.com/xjloh"} target="_blank">
              <Image
                src="/github-logo.png"
                width={32}
                height={32}
                alt="Github logo"
                className="dark:bg-white dark:rounded-[100%]"
              ></Image>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
