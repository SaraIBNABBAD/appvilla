import { Component } from "react";
import './sec2.css';
class Structure extends Component{
    render(){
        return(
            <div className="content">
                <div className="flex">
                    <div className="texte">
                    <h1>{this.props.titre}</h1>
                    <p>{this.props.text}</p>
                    </div>
                
               <div>
                <img src={this.props.photo} alt="" className="img"/>
               </div>
               </div>
               </div>
                
            
        )
    }
}
export default Structure