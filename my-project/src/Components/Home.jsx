import React from "react";

import Curosals from "./Home/Curosals";
import Category from "./Home/Category";
import GameChanger from "./Home/GameChanger";
import Overview from "./Home/Overview";
import Overview2 from "./Home/Overview2";
import Overview3 from "./Home/Overview3";
import Sliding from "./Home/Sliding";

import Cards from "./Home/Cards";

import Bottom from "./Navbar/bottom";




const Home=()=>{
    return (
        <div className="overflow-hidden">
          <Bottom/>
         
             <Curosals/>
             <Category/>
          
             <Overview/>
             <GameChanger/>
             <Overview2/>

             <Overview3/>
             <Sliding/>
             <Cards/>
          
         
           
            
         

            
        </div>
    )
}

export default Home;