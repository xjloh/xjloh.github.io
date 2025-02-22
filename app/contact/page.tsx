import { Mail, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "next/form";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex justify-center items-center flex-stretch h-screen gap-16"
      >
        <Form
          action="/"
          className="flex flex-col items-center gap-[1rem] border border-black p-[1rem] w-1/2 h-1/2"
        >
          <p className="font-bold text-2xl">Get in Touch</p>
          {/* <input type="hidden" name="access_key" value="f7e9715c-a702-491e-9b20-6958de3b46a9"> */}
          <input
            className="pl-[12px] border border-stone-900 w-full h-12"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            className="pl-[12px] border border-stone-900 w-full h-12"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            className="p-[10px] border border-stone-900 w-full h-1/2"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <Button id="email-submit" className="btn-color-1" type="submit">
            <Send></Send>
            Send
          </Button>
          <div id="result"></div>
        </Form>
        <div className="">
          <p className="font-bold text-2xl">Connect with me on</p>
          <div className="flex flex-col align-start">
            <Link
              href={"https://www.linkedin.com/in/jamiexjloh/"}
              target="_blank"
            >
              <div className="flex items-center gap-[0.5rem] mt-[1rem]">
                <Image
                  src="/linkedin-logo.png"
                  width={20}
                  height={20}
                  alt="LinkedIn logo"
                  className="cursor-default"
                ></Image>
                <p>LinkedIn</p>
              </div>
            </Link>
            <Link href={"mailto:xinjun978@gmail.com"}>
              <div className="flex items-center gap-[0.5rem] mt-[1rem]">
                <Mail></Mail>
                <p>xinjun978@gmail.com</p>
              </div>
            </Link>
            <Link href={"https://github.com/xjloh"} target="_blank">
              <div className="flex items-center gap-[0.5rem] mt-[1rem]">
                <Image
                  src="/github-logo.png"
                  width={20}
                  height={20}
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
