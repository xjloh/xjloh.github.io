"use client";
import { Mail, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";

async function handleSubmit(event: FormEvent) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

  const response = await fetch("/api/submit", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
}

const Contact = () => {
  //f7e9715c-a702-491e-9b20-6958de3b46a9
  return (
    <>
      <section
        id="contact"
        className="flex justify-center items-center flex-stretch h-screen gap-16"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-[1rem] border border-primary p-[1rem] w-1/2 dark:border-none dark:bg-gray-800 rounded-lg"
        >
          <p className="font-bold text-2xl underline underline-offset-2 dark:text-white">
            Get in Touch
          </p>
          <input
            className="pl-[12px] border border-primary w-full h-12 dark:border-none"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className="pl-[12px] border border-primary w-full h-12 dark:border-none"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            className="p-[10px] border border-primary w-full h-1/2 dark:border-none"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <Button
            type="submit"
            className="dark:bg-transparent dark:text-white border border-primary"
          >
            <Send></Send>
            Send
          </Button>
          <div id="result"></div>
        </form>
        <div className="">
          <p className="font-bold text-2xl underline underline-offset-2">
            Connect with me on
          </p>
          <div className="flex flex-col align-start">
            <Link
              href={"https://www.linkedin.com/in/jamiexjloh/"}
              target="_blank"
            >
              <div className="flex items-center gap-[0.5rem] mt-[1rem] ml-[1rem]">
                <Image
                  src="/linkedin-logo.png"
                  width={24}
                  height={24}
                  alt="LinkedIn logo"
                  className="cursor-default"
                ></Image>
                <p>LinkedIn</p>
              </div>
            </Link>
            <Link href={"mailto:xinjun978@gmail.com"}>
              <div className="flex items-center gap-[0.5rem] mt-[1rem] ml-[1rem]">
                <Mail className="w-[24px] h-[24px]"></Mail>
                <p>xinjun978@gmail.com</p>
              </div>
            </Link>
            <Link href={"https://github.com/xjloh"} target="_blank">
              <div className="flex items-center gap-[0.5rem] mt-[1rem] ml-[1rem]">
                <Image
                  src="/github-logo.png"
                  width={24}
                  height={24}
                  alt="GitHub logo"
                  className="cursor-default dark:bg-white dark:rounded-[100%]"
                ></Image>
                <p>Github</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
