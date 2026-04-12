import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import AboutPage from "./pages/AboutPage";

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
            path="/aboutme"
            element={
              <>
                <AboutPage />
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
          <Route
            path="/blog"
            element={
              <>
                <BlogPage />
              </>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <>
                <BlogPost />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
