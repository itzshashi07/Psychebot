import DemoCarousel from '../Component/Carosuel/DemoCarousel';
import ChatSample from '../Component/ChatSamle.jsx/ChatSample';
import Details from '../Component/Details/Details';
import Overview from '../Component/Overview/Overview';
import NavBar from "../Component/NavBar/NavBar";
import AfterLoginPage from "./AfterLoginPage"
const HomePage = () => {
  let isLogin = localStorage.getItem('isLogin');

  return (
    <div>
       <NavBar/>
      {
      !isLogin&&<div>
      <DemoCarousel />
      <Details />
      <Overview />
      <ChatSample />
      </div>
      }
      {
        isLogin&&
        <div>
      <AfterLoginPage/>
      
        </div>
      }
    </div>
  );
};

export default HomePage;
