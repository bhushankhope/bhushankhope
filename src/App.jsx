import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ControlledAccordions } from "./components";
import Resume from './components/Resume/Resume';
import ReactGA from 'react-ga4';

const App = () => {
  ReactGA.initialize("G-87QTJW2LLT");
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();
  const showHero = location.pathname === "/";

  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      {showHero && (
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
      )}
      <Routes>
        <Route path="/" element={<>
          <About />
          <ControlledAccordions />
          {/* <Experience /> */}
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </>} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
