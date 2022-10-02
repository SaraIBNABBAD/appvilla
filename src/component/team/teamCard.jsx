import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Card extends Component{
    render(){
        return(
            <div>
                <div className="container">
                  <div className="card " >
                    <img src={this.props.image} alt="IMAG" />
                  <div className="card-body ">
                    <div>
                      <h5>Leonard Krasner</h5>
                      <p>Senior Designer</p>
                    </div>                                   
                
                  </div>
                  </div>
                </div>
            </div>
        )
    }
}
export default Card