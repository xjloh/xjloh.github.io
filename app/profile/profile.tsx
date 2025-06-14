"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Profile section */}
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
            <div className="relative border-2 border-solid border-primary bg-secondary">
              <button
                type="button"
                className="font-semibold p-4 w-[10rem] text-center"
                onClick={toggleDropdown}
              >
                Resume
              </button>
              {isOpen ? (
                <>
                  <div className="absolute mt-1 z-1 min-w-[10rem] origin-top-right divide-y divide-gray-100 bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                    <Link
                      href={"/xjl-resume-modern.pdf"}
                      target="_blank"
                      className="block px-[16px] py-[12px] text-center text-gray-700 hover:bg-gray-200"
                      onClick={toggleDropdown}
                    >
                      Modern
                    </Link>
                    <Link
                      href={"/xjl-resume-traditional.pdf"}
                      target="_blank"
                      className="block px-[16px] py-[12px] text-center text-gray-700 hover:bg-gray-200"
                      onClick={toggleDropdown}
                    >
                      Traditional
                    </Link>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="border-2 border-solid border-primary font-semibold p-4 w-[10rem] text-center bg-primary text-secondary hover:cursor-pointer">
              Contact info
            </div>
          </div>
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

export default Profile;
