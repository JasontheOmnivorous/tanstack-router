import { Link } from "@tanstack/react-router";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Link
        className="border border-gray-300 pr-5 pl-5 pt-2 pb-2 rounded-md"
        to="/cel-to-fah"
      >
        <div>Celcius to Fahrenheit</div>
      </Link>
    </div>
  );
}

export default App;
