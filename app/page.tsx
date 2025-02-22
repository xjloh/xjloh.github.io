import Navbar from "@/components/Navbar";
import Profile from "./profile/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <Contact></Contact>
    </>
  );
}
