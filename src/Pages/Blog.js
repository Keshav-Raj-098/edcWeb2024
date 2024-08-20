import React from 'react'
import Blogtitle from '../Components/BlogCard'

const Blog = () => {
    return (
        <div className="px-5 flex flex-col justify-center items-center">

            <h1
                style={{ textAlign: "center", fontSize: "34px", fontWeight: "bold" }}
            >Blogs</h1>

            <div className="lfex flex-col justify-center items-center">

                <Blogtitle />
                <Blogtitle />
                <Blogtitle />
                <Blogtitle />


            </div>


        </div>
    )
}

export default Blog
