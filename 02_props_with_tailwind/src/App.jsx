import "./App.css";
import Card from "./Components/Card";

const App = () => {
  return (
    <>
      <h1 className="bg-green-400 mb-5 text-black rounded-md p-2">
        Tailwind Css
      </h1>
      <Card name="Apple" btnText="click for more" />
      <Card name="Lenevo" />
    </>
  );
};

export default App;
