"use client";
import { Link } from "lucide-react";
import Image from "next/image";

export interface IProjectCard {
  title: string;
  repoLink: string;
  projectLink: string;
  projectImage: string;
}

const ycDirectory: IProjectCard = {
  title: "YC Directory",
  repoLink: "https://github.com/xjloh/proj-app",
  projectLink: "https://lxj-yc-directory.vercel.app/",
  projectImage: "/yc-directory.png",
};

const ProjectCards: React.FC<IProjectCard> = ({
  title,
  repoLink,
  projectLink,
  projectImage,
}) => {
  return (
    <>
      <div className="project-card">
        <h2>{title}</h2>
        <Link
          className="text-underline fs-[14px]"
          //   style="text-decoration: underline; font-size: 14px;"
          href={repoLink}
          target="_blank"
        >
          Github repo
        </Link>
        <div
          className="project-img-container"
          onClick={() => window.open(projectLink, "_blank")}
        >
          <Image
            src={projectImage}
            alt="YC Directory Img"
            height={164}
            width={100}
            className="project-image"
          />
          <div className="middle">
            <p>Visit website</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="flex justify-center items-center flex-stretch h-screen gap-16"
      >
        <div className="flex flex-col gap-[2rem]">
          <h1 className="text-5xl text-center font-bold">Projects</h1>
          <div className="flex flex-row content-center mt-[2rem]">
            <ProjectCards {...ycDirectory}></ProjectCards>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
