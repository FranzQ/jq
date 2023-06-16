import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import { Quicksand } from "next/font/google";
import Layout from "../components/Layout";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  "/Home/H1.jpg",
  "/Home/H2.jpg",
  "/Home/H3.jpg",
  "/Home/H4.jpg",
  "/Home/H5.jpg",
  "/Home/H6.jpg",
];


const quicksand = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className={`w-full p-0 ${quicksand.className}`}>
        <div className=" px-4 pt-4 md:px-12 w-full">
          <Fade arrows={false} pauseOnHover={false}>
            {fadeImages.map((url, index) => (
              <div key={index} className="relative h-[90vh] w-full">
                <img src={url} alt='artwork'className="w-full h-full"/>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </Layout>
  );
}
