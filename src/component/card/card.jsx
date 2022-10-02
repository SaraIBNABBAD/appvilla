import { Component } from "react";

class Card extends Component{
    render(){
        return(
            <div>
                
                <h4>{this.props.titre}</h4>
                <p >{this.props.text}</p>
            </div>
        )
    }
}
export default Card