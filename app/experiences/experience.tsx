"use client";
import React, { useState } from "react";

export interface IExperienceCard {
  companyName: string;
  location: string;
  jobTitle: string;
  duration: string;
  skills: string;
  testingSuite?: string; // Optional, as some experiences might not have this
  introduction: string;
  roles?: string[];
  /**
   * An array of strings, where each string represents a key achievement.
   */
  achievements?: string[];
  companyLink?: string; // Optional
  /**
   * The display text for the company link (e.g., "here" or "PeachPay website").
   * Required if `companyLink` is provided.
   */
  companyLinkText?: string; // Optional
}

const peachPay: IExperienceCard = {
  companyName: "PeachPay",
  location: "Iowa, USA",
  jobTitle: "Full-stack engineer",
  duration: "2021-2024",
  skills: "Typescript, Javascript, PHP, HTML, SCSS, CSS",
  testingSuite: "Playwright",
  introduction:
    "PeachPay is a software company founded in 2020 that specializes in streamlining the checkout process for customers with minimal technical issues, thus improving sales volumes and reducing cart abandonment. Additionally, PeachPay offers multiple different features such as customizable checkout window, currency switcher, payment methods (Stripe, Square, PayPal, etc) and many more. With all that features, PeachPay aims to improve the online e-commerce experience for both customers and merchants.",
  achievements: [
    "Played a core role in developing early stages of the PeachPay plugin that raised $2 million dollars in venture capital, details .",
    "Increased sales volume from $100 thousand to $1 million per month in one year through the implementation of new features and improvements to the PeachPay plugin.",
  ],
  companyLink: "https://peachpay.app/",
  companyLinkText: "here",
};

const inTouch: IExperienceCard = {
  companyName: "InTouch",
  location: "Iowa, USA",
  jobTitle: "Frontend developer",
  duration: "2019",
  skills: "Android Studio (IDE), Java, HTML, CSS, Javascript",
  testingSuite: "JUnit",
  introduction:
    "InTouch is an application that connects people nearby, allowing users to feel more connected to the outside world. The application utilizes Google Maps API and lets users create posts within their vicinity. Users can also message others within a set range. This application was created for a semester-long project at Iowa State University.",
  roles: [
    "Led the design of the InTouch application, incorporating user-centered design principles and implementing a clean, intuitive UI for the login page, user profile page, and navigation.",
    "Developed a mobile application called InTouch that utilizes GPS technology to facilitate students' connections with people in their vicinity.",
    "Gained experience in using Android Studio to design the user interface of InTouch.",
  ],
  companyLink: "https://github.com/xjloh/coms309",
  companyLinkText: "here",
};

const ECG: IExperienceCard = {
  companyName: "ECG Anomaly Detection",
  location: "Iowa, USA",
  jobTitle: "Frontend developer",
  duration: "2021",
  skills: "Angular, Javascript",
  testingSuite: "JUnit",
  introduction:
    "Developed an Angular web application that visualizes heart rate data and detects physiological anomalies.",
  roles: [
    "Developed responsive web applications using the Angular framework.",
    "Designed intuitive user interfaces for web applications, ensuring the clear and concise visualization of heart rate data.",
  ],
  achievements: ["Received an A- for the class"],
  companyLink: undefined,
  companyLinkText: undefined,
};

const merimen: IExperienceCard = {
  companyName: "Merimen",
  location: "Selangor, Malaysia",
  jobTitle: "Software Developer",
  duration: "Feb 2025 - Current",
  skills: "React, TS, HTML, PostgreSQL, Dbeaver",
  testingSuite: "Playwright",
  introduction: `Merimen is a leading developer of cloud-based enterprise solutions serving the related parties of the insurance industry, with head office and software development centre based in Malaysia.
    Merimen's presence is expanding rapidly in the Asia Pacific region and worldwide, with branch offices in Singapore, Jakarta, Bangkok, Manila, Ho Chi Minh City, Hanoi, Hong Kong, Tokyo, Dubai and others.
    Our unrelenting commitment to the industry, and our culture of product innovation and stellar service, are the leading contributors to our success.Our solutions have been adopted by more than 150 insurance companies, 5000 workshops and motor franchises, 200 survey & investigation firms, and thousands of agents, brokers, and direct corporate clients around the world. According to the APAC CIO Outlook, Merimen is one of the 25 Most Promising SaaS Solutions Provider.`,
  roles: [
    "Employed the React framework to develop custom internal interfaces, thereby enhancing the efficacy of data management and user presentation.",
    "Used Dbeaver to formulate and execute complex PostgreSQL queries on large databases, ensuring system stability and data integrity.",
    "Implemented Playwright end-to-end tests to validate bespoke platforms with customized workflows.",
  ],
  companyLink: "https://www.merimen.com/",
  companyLinkText: "here",
};

const ExperienceCard: React.FC<IExperienceCard> = ({
  companyName,
  location,
  jobTitle,
  duration,
  skills,
  testingSuite,
  introduction,
  roles,
  achievements,
  companyLink,
  companyLinkText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`
        min-w-[300px] mb-4 md:mb-0
        dark:bg-gray-800
        relative
        bg-white
        rounded-lg
        shadow-md
        p-6
        cursor-pointer
        overflow-hidden
        transition-all duration-500 ease-in-out
        ${
          isExpanded ? "max-h-screen" : "max-h-48"
        } {/* Adjust max-h-48 as needed for initial height */}
        hover:shadow-lg
        mb-6
      `}
      onClick={toggleExpand}
    >
      {/* Experience Info (Always visible) */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {companyName}
          </h1>
          <h2 className="text-1xl">{location}</h2>
          <p className="text-md text-gray-600 dark:text-white">{jobTitle}</p>
          <p className="text-md text-gray-600 dark:text-white">({duration})</p>
        </div>
      </div>

      {/* Experience Details (Conditionally visible and animated) */}
      <div
        className={`
          transition-all duration-500 ease-in-out
          ${
            isExpanded
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <p className="text-gray-700 mt-4 dark:text-gray-300">
          <b className="dark:text-white">Skills:</b> {skills}
        </p>
        <p className="text-gray-700 mt-2 dark:text-gray-300">
          <b className="dark:text-white">Testing suite:</b> {testingSuite}
        </p>
        <br />
        <h3 className="text-xl font-semibold text-gray- dark:text-white">
          Brief introduction:
        </h3>
        <p className="text-gray-700 mt-2 dark:text-gray-300">{introduction}</p>
        <br />
        {roles ? (
          <>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Roles:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              {roles?.map((role, index) => (
                <li key={index} className="mb-1">
                  {role}
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
        {achievements ? (
          <>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Achievements:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 dark:text-gray-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="mb-1">
                  {/* Basic parsing for "here" link if it's consistently structured */}
                  {achievement.includes("details ") ? (
                    <>
                      {achievement.split("details ")[0]}details{" "}
                      <a
                        href="https://www.crunchbase.com/organization/peachpay" // This URL is hardcoded in your original HTML, consider making it a prop if it varies
                        target="_blank"
                        rel=""
                        className="text-blue-600 hover:underline"
                      >
                        here
                      </a>
                      {achievement.split("details ")[1]}
                    </>
                  ) : (
                    achievement
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
        <br />
        {companyLink &&
          companyLinkText && ( // Conditionally render if both link and text exist
            <p className="text-gray-700 dark:text-gray-300">
              Click{" "}
              <a
                href={companyLink}
                target="_blank"
                rel=""
                className="text-blue-600 hover:underline"
              >
                {companyLinkText}
              </a>{" "}
              for more info about {companyName}
            </p>
          )}
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <>
      <section
        id="experiences"
        className="flex justify-center items-center flex-stretch h-screen gap-16"
      >
        <div className="flex flex-col gap-[2rem] md:mx-[20px]">
          <h1 className="text-5xl text-center font-bold">My experience</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExperienceCard {...peachPay}></ExperienceCard>
            <ExperienceCard {...merimen}></ExperienceCard>
            <ExperienceCard {...inTouch}></ExperienceCard>
            <ExperienceCard {...ECG}></ExperienceCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
