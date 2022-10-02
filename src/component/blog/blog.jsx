import { Component } from "react";
import BlogS from './blogStuc';
import blog1 from '../../images/blog-1.jpg';
import blog2 from '../../images/blog-2.jpg';
import blog3 from '../../images/blog-3.jpg';

class Blog extends Component{
    render(){
        return(
            <div>
                <div  id="contenu">
                        <div class="text-center">
                            <h4>BLOGS</h4>
                            <h1>Our Latest News</h1>
                            <p class="text-secondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis, quibusdam architecto soluta voluptate dolores magnam</p>
                        </div>
                        <div className="flex">
                         <BlogS imgblog={blog1} titre1="Blog" titre2="Boost your conversion rate"/>
                        <BlogS imgblog={blog2} titre1="Video" titre2="How to use search enginearketing"/>
                        <BlogS imgblog={blog3} titre1="Marketing" titre2="Awsesome ways to boost sales"/>
                        </div>
                        
                </div>
            </div>
        )
    }

}
export default Blog