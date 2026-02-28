import ButtonGradient from "./assets/assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Aboutme />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
