import React from 'react'
import { useUserContext } from "../context/UserContext";
import './Home.css'
import './AddBlog.css'

import Blog from '../components/Blog'

import home_image from '../images/home_image.jpg'

const Home = () => {

    const { allBlogs } = useUserContext();

    console.log("All Blogs: ", allBlogs);

    return (
        <>
            <div>
                <div className='home-upper' style={{ backgroundImage: `url(${home_image})` }}>
                    <p>"You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day."</p>
                </div>

                <div className="blog-container">
                    {allBlogs.map((blog, index) => {
                        return <Blog key={index} blog={blog}/>
                    })}
                </div>

            </div>
        </>


    )
}

export default Home