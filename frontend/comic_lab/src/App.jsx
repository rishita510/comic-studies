import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

import Landing from "./landing/landing.jsx";
import Menu from "./menu/menu.jsx";
import Questionality from "./pages/questionality/index.jsx";
import Visibility from "./pages/visibility/index.jsx";
// import Inclusivity from "./pages/inclusivity/index.jsx";
import Originality from "./pages/originality/index.jsx";
import Activity from "./pages/Activity/index.jsx";
import Creativity from "./pages/creativity/index.jsx";
import Comics from "./pages/creativity/comics.jsx";

// Activity Subpages
import Comp1 from "./pages/Activity/competitions/2d-3d.jsx";
import Winner from "./pages/Activity/competitions/winner.jsx";

// Activity Subpages
import Competitions from "./pages/Activity/competitions/index.jsx";
import Conferences from "./pages/Activity/conferences.jsx";
import Courses from "./pages/Activity/courses.jsx";
import Events from "./pages/Activity/events/index.jsx";
import Projects from "./pages/Activity/projects.jsx";
import Publications from "./pages/Activity/publication.jsx";

// Events Subpages
import FelipeMuhr from "./pages/Activity/events/FelipeMuhr.jsx";
import DavidHuxley from "./pages/Activity/events/DavidHuxley.jsx";

// Questionality Subpages
import Faqs from "./pages/questionality/Faqs.jsx";
import Questions from "./pages/questionality/questions.jsx";

// Visibility Subpages
import News from "./pages/visibility/News.jsx";
import DC from "./pages/Activity/DC.jsx";

// Conferences Subpages
import Igncc2024 from "./pages/conferences/igncc2024.jsx";
import Igncc2025 from "./pages/conferences/igncc2025.jsx";
import FirstExperiment from "./pages/conferences/first_experiment.jsx";

// Inclusivity Subpages
import Signup from "./pages/inclusivity/Signup.jsx";
import Login from "./pages/inclusivity/Login.jsx";
import Profile from "./pages/inclusivity/Profile.jsx";
// Originality Subpages
import WhoWeAre from "./pages/originality/who_we_are.jsx";
import Student from "./pages/originality/student.jsx";
import Faculty from "./pages/originality/faculty.jsx";
import Reader from "./pages/originality/reader.jsx";
import Creator from "./pages/originality/creator.jsx";
import Scholar from "./pages/originality/scholar.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="w-full min-h-screen overflow-y-auto bg-cream text-black">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
            
            {/* menu section */}
            <Route path="/questionality" element={<Questionality />} />
            <Route path="/visibility" element={<Visibility />} />
            {/* <Route path="/inclusivity/*" element={<Inclusivity />} /> */}
            <Route path="/originality" element={<Originality />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/creativity" element={<Creativity />} />
            
            {/* Activity section */}
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
          
            {/* Questionality section */}
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/questions" element={<Questions />} />
          
            {/* Visibility section */}  
            <Route path="/news" element={<News />} />

            {/* Comics section */}  
            <Route path="/comics" element={<Comics />} />

            {/* Projects section */}  
            <Route path="/dc" element={<DC/>} />

            {/* Conferences section*/}
            <Route path="/igncc2024" element={<Igncc2024/>} />
            <Route path="/igncc2025" element={<Igncc2025/>} />
            <Route path="/firstexperiment" element={<FirstExperiment/>} />

            {/* Inclusivity section */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />

            {/* Originality section */}
            <Route path="/who_we_are" element={<WhoWeAre />} />
            <Route path="/student" element={<Student />} />
            <Route path="/faculty" element={<Faculty />} /> 
            <Route path="/reader" element={<Reader />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/scholar" element={<Scholar />} />
            {/*Competitions section*/}
            <Route path="/2d-3d" element={<Comp1/>}/>
            <Route path="/winner" element={<Winner/>}/>
            {/* Events section */}
            <Route path = "/felipe-muhr" element={<FelipeMuhr/>}/>
            <Route path = "/david-huxley" element={<DavidHuxley/>}/>

            {/* 404 page */}


          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;