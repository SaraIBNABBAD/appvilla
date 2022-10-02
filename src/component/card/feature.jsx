import Card from "./card";
import { Component } from "react";
  class Feature extends Component{
    rendre(){
        return(
            <div>
                <div>
                <h3>Feature</h3>
                <h1>Your Experience Gets Better And Better Over Time</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint id non doloribus voluptas et voluptate consequuntur officia iste, hic eaque.</p>
            </div>
                <div>
                  <Card titre="Push to Deploy" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus voluptate, velit magni itaque quidem recusandae nesciunt suscipit ratione tempora molestias odio ducimus eum optio similique possimus culpa voluptatum corrupti" />
                  
                  <Card titre="SSL Certificates"  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus voluptate, velit magni itaque quidem recusandae nesciunt suscipit ratione tempora molestias odio ducimus eum optio similique possimus culpa voluptatum corrupti" />
                
                  <Card titre="Simple Queues"  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus voluptate, velit magni itaque quidem recusandae nesciunt suscipit ratione tempora molestias odio ducimus eum optio similique possimus culpa voluptatum corrupti" />
                  
                  <Card titre="Advanced Security"  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus voluptate, velit magni itaque quidem recusandae nesciunt suscipit ratione tempora molestias odio ducimus eum optio similique possimus culpa voluptatum corrupti" />
                 
                  <Card titre="Powerful API"  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus voluptate, velit magni itaque quidem recusandae nesciunt suscipit ratione tempora molestias odio ducimus eum optio similique possimus culpa voluptatum corrupti" />
                  
                  <Card titre="Database Backups" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus voluptate, velit magni itaque quidem recusandae nesciunt suscipit ratione tempora molestias odio ducimus eum optio similique possimus culpa voluptatum corrupti" />
                  
                </div>
            </div>
            
            
        )
    }
  }
  export default Feature

