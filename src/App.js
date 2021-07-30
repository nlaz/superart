import flowers from "./flowers.json";
import "./App.css";

function FlowerItem({ flower }) {
  return (
    <div className="flower mb6 pt5">
      <div className="mb2 ba bw2 b--white pa3 bg-white">
        <img className="w-100" src={flower["Image"]} alt={flower["Name"]} />
      </div>
      <div className="info flex pt1 items-center justify-between">
        <div className="f4">{flower["Name"]}</div>
        <div className="f4"> {flower["Date"]}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="avenir min-vh-100 white bg-black pb6">
      <div className="f4 flex items-center pv3 ph4 justify-between">
        <div className="fw5">Niko Lazaris</div>
        <div className="">About</div>
      </div>
      <div className="mw7 center">
        <div className="mt5 f2 tc">Electric Daydreams</div>
        <div className="f5 tc mt1">
          An expression of flowers through generative AI
        </div>
      </div>
      <div className="mw7 mt4 center">
        {flowers.map((flower) => (
          <FlowerItem key={flower["Name"]} flower={flower} />
        ))}
      </div>
      <div className="mw7 center tc">
        <div>Brooklyn, New York</div>
        <div className="mt1">Copyright © 2021</div>
      </div>
    </div>
  );
}

export default App;
