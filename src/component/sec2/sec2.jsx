import { Component } from "react";
import Structure from "./sec2stru";
import ph1 from '../../images/app-ss1.png';
import ph2 from '../../images/app-ss2.png';
import './sec2.css';
class Section extends Component{
    render(){
        return(
            <div>
                <div>
                <Structure titre="1,25,000 Customers Using the Application!" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam quibusdam dolores natus! Dicta fuga similique magnam voluptatum neque accusamus saepe, expedita voluptatibus vel iste, enim nihil. Enim, pariatur placeat?" photo={ph1}/>
                </div>
               <div>
               <button className="btn">Get Started</button>
            </div>
                
                
            <div>
                 <Structure titre="Seamless Loyalty" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam quibusdam dolores natus! Dicta fuga similique magnam voluptatum neque accusamus saepe, expedita voluptatibus vel iste, enim nihil. Enim, pariatur placeat?" photo={ph2}/>
            </div>
              <div> 
               <button className="btn">Get Started</button>
            </div>
            
                       
                  
            </div>
        )
    }
}
export default Section