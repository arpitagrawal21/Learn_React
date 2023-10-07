import { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 inset-x-0 flex justify-center flex-wrap">
          <div className="flex justify-center flex-wrap gap-4 rounded-full px-4 py-2 bg-white shadow-md">
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              red
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              white
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg text-white"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              olive
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              green
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              blue
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg text-white"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              purple
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              black
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              pink
            </button>
            <button
              className="text-center outline-none rounded-full px-3 py-1 shadow-lg"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}
            >
              lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
