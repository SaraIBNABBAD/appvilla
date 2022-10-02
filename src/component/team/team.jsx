import { Component } from "react";
import imaga from '../../images/team1.jpg';
import imagb from '../../images/team2.jpg';
import imagc from '../../images/team3.jpg';
import Card from "./teamCard";
import './team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Team extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <h4 className="text-center">TEAM</h4>
                    <h1 className="text-center">Meat Our Team</h1>
                    <p className="text-secondary text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, ducimus. Nobis voluptates sit soluta </p>
                    <div className="flex">
                        <Card image={imaga}
                        />
                        <Card image={imagb}/>
                        <Card image={imagc}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team