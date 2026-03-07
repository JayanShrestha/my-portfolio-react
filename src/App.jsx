import ButtonGradient from "./assets/assets/svg/ButtonGradient";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/contactme"
            element={
              <>
                <ContactMe />
              </>
            }
          />
        </Routes>
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
