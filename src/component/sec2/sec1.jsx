import { Component } from "react";
import Structure from "./sec2stru";
import phot from '../../images/phone.png';
import './sec1.css';
class Section1 extends Component{
    render(){
        return(
            <div className="contnt">
                <Structure titre="A Powerful App For Your Business" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam quibusdam dolores natus! Dicta fuga similique magnam voluptatum neque accusamus saepe, expedita voluptatibus vel iste, enim nihil. Enim, pariatur placeat?" photo={phot}/>
            <div>
            <button className="btne">App Store</button>
            <button className="btne">Google Play</button>
         </div>
            </div>
        )
    }
}
export default Section1