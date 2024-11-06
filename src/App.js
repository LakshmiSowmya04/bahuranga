import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Carousel";
import sv from "./flower-svgrepo-com.svg";
import bmsit from "./B.M.S._Institute_of_Technology_and_Management_logo.png";

const exampleItems = [
  {
    title: "Card 1",
    imageSrc: "https://via.placeholder.com/150",
    description: "i am  card 3.😁😇1.",
  },
  {
    title: "Card 2",
    imageSrc: "./image.png",
    description: "i am  card 3.😇🕵🏻2.",
  },
  {
    title: "Card 3",
    imageSrc: "https://via.placeholder.com/150",
    description: "i am  card 3.😎😎",
  },
  {
    title: "Card 4",
    imageSrc: "./ba.png",
    description: "i am  card 3.🌚😑😑🙂 4.",
  },
  {
    title: "Card 5",
    imageSrc: "https://via.placeholder.com/150",
    description: "i am  card 3.🥴🤢 5.",
  },
];

function App() {
  return (
    <div className="App">
      <img src={bmsit} className="bmsit-logo" alt="logo" />
      <div className="logo-container">
        <img src={sv} className="App-logo" alt="logo" />
        <h2>ಬಹುರಂಗ</h2>
        <img src={sv} className="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        <nav className="App-nav">
          <button className="nav-button">Home</button>
          <button className="nav-button">Events</button>
          <button className="nav-button">Contact</button>
        </nav>
      </header>
      <main className="App-main">
        <Carousel items={exampleItems} />
      </main>
    </div>
  );
}

export default App;
