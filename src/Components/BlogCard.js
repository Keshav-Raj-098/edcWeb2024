import React from 'react'
import "./Blog.css"
import { FaHeart } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Blogtitle = () => {

  const navigate = useNavigate()
 


  return (
    <div className='px-3 py-2 my-4 card flex flex-col-reverse gap-1 lg:flex-row lg:justify-between'
      style={{ border: "1px solid black", borderRadius: "15px",width:"90vw" }}>
      <div className='flex flex-col gap-1'>

        <span
          style={{ fontSize: "18px", fontWeight: "700" }}
        >ECONOMIC DIPLOMACY: THE FINE BALANCE OF TRADE POLICIES AND GEOPOLITICS </span>

        <div style={{
          fontSize: "15px", fontWeight: "500"
        }}>Author:Keshav Raj</div>

        <div className='flex flex-row gap-2 items-center'>
          <span style={{ fontSize: "14px" }}>Posted on : 18-08-2024</span>
          <span className='flex flex-row gap-1 items-center'>

            <FaHeart className='cursor-pointer' 
              style={{ color:"red"}}
            />
            <span>{50}</span>
          </span>
        </div>

        <span className=' bg-black text-white flex flex-row items-center cursor-pointer '
          style={{ padding: "8px 12px", height: "38px", width: "120px", gap: "3px",borderRadius:"10px" }}

          onClick={() => { navigate("/blogPage") }}

        >
          Read More
          <MdKeyboardDoubleArrowRight color='white' />
        </span>



      </div>

   <div className='flex flex-row justify-center lg:justify-end'>
    
      <div 
  style={{
    height: "100px",
    width: "200px",
    backgroundImage: "url('https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58c4d082-c541-4216-bf1b-6725444fc9d4_1080x1080.heic')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
></div>
  </div>

    </div>
  )
}

export default Blogtitle
