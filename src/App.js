import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./compont/NavBar";
import Pagelistlink from "./compont/Pagelistlink";
import Cloth from "./compont/Cloth";
import Baby from "./compont/Baby";
import Sports from "./compont/Sports";
import Shoes from "./compont/Shoes";
import Mobile from "./compont/Mobile";
import Hours from "./compont/Hours";
import Perfumes from "./compont/Perfumes";
import Beauty from "./compont/Beauty";
import Home from "./Home";




export default function App(){

    return(
      
    <BrowserRouter>
      <div className="app">

       <div>
         <NavBar/>
         <Pagelistlink/>
       </div>
      
      <Routes>
       <Route path="/"                element={<Home/>}/>
       <Route path="/clothes"         element={<Cloth/>}/>
       <Route path="/baby"            element={<Baby/>}/>
       <Route path="/sports"          element={<Sports/>}/>
       <Route path="/shoes"           element={<Shoes/>}/>
       <Route path="/mobiles"         element={<Mobile/>}/>
       <Route path="/hours"           element={<Hours/>}/>
       <Route path="/perfumes"        element={<Perfumes/>}/>
       <Route path="/beauty"          element={<Beauty/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
    



      );
}
      

       
