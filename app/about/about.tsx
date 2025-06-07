import { GraduationCap, Trophy } from "lucide-react";

const About = () => {
  return (
    <>
      <section id="about" className="flex flex-col justify-center">
        <p className="text-sm text-center">Get To Know More</p>
        <h1 className="text-5xl text-center font-bold">About Me</h1>
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-[3rem] md:gap-[4rem] justify-center items-start p-4 items-stretch">
            <div className="flex flex-col items-center p-8 rounded-xl shadow-lg flex-1 w-full max-w-sm dark:bg-gray-800 dark:text-gray-200 dark:shadow-none dark:border dark:border-gray-700">
              <Trophy className="w-[40px] h-[40px] text-yellow-400 mb-4"></Trophy>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-50">
                Skills
              </h3>
              <ul className="list-none p-0 text-center text-gray-700 space-y-3 w-full dark:text-gray-300">
                <li className="text-m">
                  <b className="text-gray-900 dark:text-white">Multilingual</b>-
                  English, Mandarin, Malay
                </li>
                <li className="leading-relaxed">
                  <b className="text-gray-900 dark:text-white">Technologies</b>-
                  TS, JS, Angular, PHP, HTML, CSS, SCSS, Java, C, C++, MySQL,
                  PostgreSQL, DBeaver, React
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-8 rounded-xl shadow-lg flex-1 w-full max-w-sm dark:bg-gray-800 dark:text-gray-200 dark:shadow-none dark:border dark:border-gray-700">
              <GraduationCap className="w-[40px] h-[40px] text-blue-600 mb-4"></GraduationCap>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 dark:text-gray-50">
                Education
              </h3>
              <ul className="list-none p-0 text-center text-gray-700 space-y-3 w-full dark:text-gray-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
                  Iowa State University (2018-2021)
                </h4>
                <li className="text-lg">B.S. in Computer Science</li>
                <li className="text-lg">3.61/4.00 (Cum Laude)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
