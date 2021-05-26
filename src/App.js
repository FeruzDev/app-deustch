import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Course from "./components/Course";
import OnlineCourse from "./components/OnlineCourse";
import Application from "./components/Application";
import Method from "./components/Method";
import Accordion from "./components/Accordion";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
     <div className="overflow-hidden">
     <div className="header-bg">
         <Navbar/>
         <Header/>
     </div>

         <Benefits/>
         <Course/>
         <OnlineCourse/>
         <Application />
         <Method/>
         <Accordion/>
         <Form/>
         <Footer/>
     </div>
  );
}

export default App;
