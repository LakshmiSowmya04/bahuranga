import React, { useState } from "react"; // Import useState
import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Carousel";
import sv from "./flower-svgrepo-com.svg";
import bmsit from "./B.M.S._Institute_of_Technology_and_Management_logo.png";
import img1 from "./people-dancing-silouettes-background_1048-903.avif";
import img2 from "./group sunging.jpg";
import img3 from "./happy-cute-kid-girl-sing-song-166431357.webp";
import img4 from "./solo-dance-performed-girl-hindi-accessories-bharatanatyam-woman-silk-dress-dancer-vector-illustration-white-indian-90354419.webp";
import img5 from "./fash2.avif";
const exampleItems = [
  {
    title: "Groud Dancing",
    imageSrc: img1,
    description: "Group dance for 3-4 people!!",
  },
  {
    title: "Group singing",
    imageSrc: img2,
    description: "I am card 2.😇🕵🏻2.",
  },
  {
    title: "solo singing",
    imageSrc: img3,
    description: "I am card 3.😎😎",
  },
  {
    title: "Solo dancing",
    imageSrc: img4,
    description: "I am card 4.🌚😑😑🙂.",
  },
  {
    title: "Fashion show",
    imageSrc: img5,
    description: "I am card 5.🥴🤢.",
  },
];

function App() {
  // Define the hover state
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the hover effect
  const hoverStyle = {
    color: isHovered ? "#eae052" : "", // Change color on hover
    transform: isHovered ? "scale(1.1)" : "scale(1)", // Slightly zoom in on hover
    transition: "color 0.3s, transform 0.3s", // Smooth transition for color and transform
  };

  return (
    <div className="App">
      <img src={bmsit} className="bmsit-logo" alt="logo" />
      <div className="logo-container">
        <img src={sv} className="App-logo" alt="logo" />
        <h1
          style={hoverStyle}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
        >
          ಬಹುರಂಗ
        </h1>
        <img src={sv} className="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        <nav className="App-nav">
          <button className="nav-button">
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </a>
          </button>
          <button className="nav-button">
            <a
              href="https://forms.gle/duYHgYfZt1nPqdCy6"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Events
            </a>
          </button>
          <button className="nav-button">
            <a
              href=" https://www.instagram.com/bmsit_cultural_committee?igsh=eWc0NDZyOWFyMHkx "
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </a>
          </button>
        </nav>
      </header>
      <main className="App-main">
        <Carousel items={exampleItems} />
      </main>
    </div>
  );
}

export default App;
