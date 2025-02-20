import Navbar from "@/components/Navbar";
import Hero from "./profile/page";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Contact></Contact>
    </>
  );
}
