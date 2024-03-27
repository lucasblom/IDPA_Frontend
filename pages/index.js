import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "next/document";
import Profile_view from "./components/Profile_view";
import Recently_viewed from "./components/Recently_viewed";
import Upload from "./components/Upload";
import Nav_element from "./components/Nav_element";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={{height:'100vh', backgroundColor:'white'}}>
    <Profile_view />
    <Recently_viewed />
    <Upload />
    <Nav_element />
    </main>
  );
}
