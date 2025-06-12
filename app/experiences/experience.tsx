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
  /**
   * An array of strings, where each string represents a key achievement.
   */
  achievements: string[];
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
    "Played a core role in developing early stages of the PeachPay plugin that raised $2 million dollars in venture capital, details here.", // Keep the 'details here' for the custom parsing
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
  achievements: [
    "Led the design of the InTouch application, incorporating user-centered design principles and implementing a clean, intuitive UI for the login page, user profile page, and navigation.",
  ],
  companyLink: "https://github.com/xjloh/coms309",
  companyLinkText: "here", // This refers to the "git repo" link
};

const ECG: IExperienceCard = {
  companyName: "ECG Anomaly Detection",
  location: "Iowa, USA",
  jobTitle: "Frontend developer",
  duration: "2021",
  skills: "Angular, Javascript",
  // No testing suite explicitly mentioned in the HTML for this one
  testingSuite: undefined,
  introduction:
    "Developed a webpage using Angular framework to display heartrate info",
  // No specific achievements listed as bullet points in the HTML
  achievements: [],
  // No external links provided in the HTML for this one
  companyLink: undefined,
  companyLinkText: undefined,
};

const ExperienceCard: React.FC<IExperienceCard> = ({
  companyName,
  location,
  jobTitle,
  duration,
  skills,
  testingSuite,
  introduction,
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
        floating-effect
        mb-6
      `}
      onClick={toggleExpand}
    >
      {/* Experience Info (Always visible) */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800">{companyName}</h1>
          <h2 className="text-1xl">{location}</h2>
          <p className="text-md text-gray-600">{jobTitle}</p>
          <p className="text-md text-gray-600">({duration})</p>
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
        <p className="text-gray-700 mt-4">
          <b>Skills:</b> {skills}
        </p>
        <p className="text-gray-700 mt-2">
          <b>Testing suite:</b> {testingSuite}
        </p>
        <br />
        <h3 className="text-xl font-semibold text-gray-800">
          Brief introduction:
        </h3>
        <p className="text-gray-700 mt-2">{introduction}</p>
        <br />
        <h3 className="text-xl font-semibold text-gray-800">Achievements:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
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
        <br />
        {companyLink &&
          companyLinkText && ( // Conditionally render if both link and text exist
            <p className="text-gray-700">
              Click{" "}
              <a
                href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
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

// export default ExperienceCard;

const Experiences = () => {
  return (
    <>
      <section id="experiences" className="flex flex-col">
        <h1 className="text-5xl text-center font-bold">My experience</h1>
        <div className="flex flex-row">
          <ExperienceCard {...peachPay}></ExperienceCard>
          <ExperienceCard {...inTouch}></ExperienceCard>
          <ExperienceCard {...ECG}></ExperienceCard>
        </div>
      </section>
    </>
  );
};

export default Experiences;
