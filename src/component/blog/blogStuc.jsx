import { Component } from "react";
 class BlogS extends Component{
    render(){
        return(
            <div>
                <div className="card ">
                <img src={this.props.imgblog} alt="" />
                <h1>{this.props.titre1}</h1>
                <h4>{this.props.titre2}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum vel possimus at, itaque delectus impedit nam</p>
                </div>
                
            </div>
        )
    }
 }
 export default BlogS