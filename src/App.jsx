import HomePage from "./Pages/HomePage";
import BookingPage from "./components/BookingPage";
import LoginPage from "./components/LoginPage";
import MovieDetailsPage from "./components/MovieDetailedPage";
import MoviesList from "./components/MoviesList";
import SeatList from "./components/SeatsList";
import SignupPage from "./components/SignupPage";
import Theaters from "./components/Theaters";
import "./index.css";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        
        <Route path = "/login" element = {<LoginPage/>} />
        <Route path = "/signup" element = {<SignupPage/>} />

        <Route path ={"/movies"} element = {<MoviesList/>}></Route>
        <Route path ={"/movies/details/:id"} element = {<MovieDetailsPage/>}></Route>
        <Route path="/theater/:Id" element = {<Theaters/>} />
        <Route path="/theater/:theaterID" element ={<SeatList/>} />
        <Route path ="/booking/:id" element = {<BookingPage/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
