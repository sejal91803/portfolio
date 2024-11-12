import { BrowserRouter } from "react-router-dom";  

import Education from './components/Education';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";  // Import Education component  
import Certifications from "./components/Certificates";

const App = () => {  
  return (  
    <BrowserRouter>  
      <div className='relative z-0 bg-primary'>  
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>  
          <Navbar />  
          <Hero />  
        </div>  
        <About />  
        <Education />  {/* Add Education component here */}  
        <Experience />  
        <Tech />  
        <Works />  
        <Certifications />
        <Feedbacks />  
        <div className='relative z-0'>  
          <Contact />  
          <StarsCanvas />  
        </div>  
      </div>  
    </BrowserRouter>  
  );  
}  

export default App;
