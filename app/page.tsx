import Navbar from "@/components/Navbar";
import Profile from "./profile/profile";
import Contact from "./contact/page";
import About from "./about/about";
import Experiences from "./experiences/experience";
import Projects from "./projects/projects";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Experiences></Experiences>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
