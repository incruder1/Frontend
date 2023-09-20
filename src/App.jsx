import bgSvg from "./assets/bg-svg.svg";
import Home from "./pages/Home";

function App() {
  return (
    <main className="relative flex h-screen w-screen flex-col justify-between overflow-hidden bg-black text-white">
      <img
        src={bgSvg}
        alt="bgSvg"
        className="sm:h-[100%]8sm:w-[100%] absolute -mt-32 h-full w-full object-cover sm:-mt-40 lg:-mt-36 lg:h-[115%] lg:w-[100%]"
      />
      <Home />
    </main>
  );
}

export default App;
