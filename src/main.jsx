import { createRoot } from "react-dom/client";
import "./index.css";
import "./profile.css";
import reactImage from "./assets/react.svg"; //importing the image from assests folder
import rightArrow from "./assets/right-arrow.svg";
import viteImage from "/vite.svg"; //importing the image from public folder by directly mentioning name

const rootElement = document.getElementById("root");
const rootDom = createRoot(rootElement);

rootDom.render(
  <>
    <header>
      <img
        src={reactImage}
        style={{ width: "5rem", height: "5rem" }}
        alt="Vite image"
      />
      <h1>Hi I am a Full Stack Developer</h1>
    </header>

    <main>
      <h2>My Name is Pratikesh</h2>
      <ol>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ol>

      <a href="">
        <span>Hire Me</span>
        <img src={rightArrow} alt="right arrow" />
      </a>
    </main>
    <footer>
      <span>©️ All right reserved</span>
    </footer>
  </>
);
