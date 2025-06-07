import Navbar from "@/components/Navbar";
import Profile from "./profile/page";
import Contact from "./contact/page";
import About from "./about/about";
import Experiences from "./experiences/experience";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Experiences></Experiences>
      <Contact></Contact>
    </>
  );
}
