import { useState } from "react";
import flowers from "./flowers.json";
import "./App.css";

function FlowerItem({ flower, onClick }) {
  return (
    <div className="flower mb6 pt5 pointer" onClick={onClick}>
      <div className="mb2 ba bw2 b--white pa2 pa3-ns bg-white">
        <img className="w-100" src={flower["Image"]} alt={flower["Name"]} />
      </div>
      <div className="info flex pt1 items-center justify-between">
        <div className="f4">{flower["Name"]}</div>
        <div className="f4"> {flower["Date"]}</div>
      </div>
    </div>
  );
}

function FlowerModal({ onClose, flower }) {
  return (
    <div
      className="fixed absolute--fill bg-black overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="tr pointer pa4 f3" onClick={onClose}>
        X
      </div>
      <div className="mw7 center pa3">
        <img className="w-100" src={flower["Image"]} alt={flower["Name"]} />
        <div className="flex pt1 items-center justify-between">
          <div className="f4">{flower["Name"]}</div>
          <div className="f4"> {flower["Date"]}</div>
        </div>
      </div>
    </div>
  );
}

function AboutModal({ onClose }) {
  return (
    <div
      className="fixed absolute--fill bg-black overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="tr pointer pa4 f3" onClick={onClose}>
        X
      </div>
      <div className="mw6 center mt6 pa3">
        <div className="fw5 f4">About</div>
        <div className="bb b--white mt2 mb3" />
        <div className="f5 lh-copy">
          Niko is a digital artist located in Brooklyn, New York. He works
          primarily at the intersection of art and technology and focuses on
          bringing physical items to life through generative AI.
        </div>
        <div className="f5 lh-copy mt2">
          For more information, please email{" "}
          <span className="fw6">
            nikolazaris<i>@</i>gmail<i>.</i>com
          </span>
          .
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showFlowerModal, setShowFlowerModal] = useState(false);
  const [flower, setFlower] = useState(undefined);

  const handleFlowerClick = (value) => {
    setFlower(value);
    setShowFlowerModal(true);
  };

  return (
    <div className="avenir min-vh-100 white bg-black pb6 relative">
      {showAboutModal && (
        <AboutModal onClose={() => setShowAboutModal(false)} />
      )}
      {showFlowerModal && flower && (
        <FlowerModal
          flower={flower}
          onClose={() => setShowFlowerModal(false)}
        />
      )}
      <div className="f4 flex items-center pv3 ph4 justify-between">
        <div className="fw5">Niko Lazaris</div>
        <div className="pointer" onClick={() => setShowAboutModal(true)}>
          About
        </div>
      </div>
      <div className="pa3 pa0-ns mw7 center">
        <div className="mt5 f2 tc">Electric Daydreams</div>
        <div className="f5 tc mt1">
          An expression of flowers through generative AI
        </div>
      </div>
      <div className="pa3 pa0-ns mw7 mt4 center">
        {flowers.map((flower) => (
          <FlowerItem
            key={flower["Name"]}
            flower={flower}
            onClick={() => handleFlowerClick(flower)}
          />
        ))}
      </div>
      <div className="pa3 pa0-ns mw7 center tc">
        <div>Brooklyn, New York</div>
        <div className="mt1">Copyright © 2021</div>
      </div>
    </div>
  );
}

export default App;
