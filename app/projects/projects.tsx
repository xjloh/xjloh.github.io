"use client";
import Image from "next/image";
import Link from "next/link";

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
      <div className="dark:bg-gray-800 w-80 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 p-4 pb-0 text-center dark:text-white">
          {title}
        </h3>
        <div
          className="relative cursor-pointer w-full h-48 overflow-hidden bg-gray-100 flex items-center justify-center"
          onClick={() => window.open(projectLink, "_blank")}
        >
          <Image
            src={projectImage}
            alt={`${title} Project Image`}
            className="transition-transform duration-300 group-hover:scale-105"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-medium">Visit Website</p>
          </div>
        </div>
        <div className="p-4 pt-2 flex justify-center items-center">
          <Link
            className="text-blue-600 dark:text-blue-400 hover:text-sky-800 text-sm font-medium underline transition-colors duration-200"
            href={repoLink}
            target="_blank"
          >
            GitHub Repo
          </Link>
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
        className="flex justify-center items-center flex-stretch h-screen gap-16 bg-gray-50 dark:bg-slate-900"
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
