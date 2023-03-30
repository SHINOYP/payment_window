import React from 'react'
import { useState } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';



export default function pay_Summery() {
    const [topping, setTopping] = useState("Medium")
    const props=5848;
    const onOptionChange = e => {
      setTopping(e.target.value)
    }
    console.log(topping)
  return (
    <div className='flex flex-col justify-between md:w-8/12 mx-auto h-screen md:h-max' > 
        <div className=''>
            <div className='flex flex-col mx-4 mt-6 mb-4'>
                <h1 className='font-bold text-lg mb-1'>Choose a Payment Method</h1>
                <span className='text-slate-500 font-medium '>select you preferred payment method below</span>
            </div>
            <hr/>
            <div className='flex flex-col mt-4 '>
        
                <div className='flex mx-auto rounded-md items-center bg-white w-80 h-10 md:h-14 md:w-11/12'>
                <hr></hr>
                    <input
                            type="radio"
                            name="topping"
                            value="Regular"
                            id="regular"
                            checked={topping === "Regular"}
                            onChange={onOptionChange}
                            className ="mx-4"
                        />
                    <label >Regular</label>
                </div>
                <div  className='flex mx-auto  rounded-md items-center bg-white mt-4 mb-4 w-80 h-10 md:h-14  md:w-11/12 '>
                    
                    <input
                            type="radio"
                            name="topping"
                            value="Medium"
                            id="medium"
                            checked={topping === "Medium"}
                            onChange={onOptionChange}
                            className ="mx-4"
                    />
                    <label >Medium</label>
                </div> 
                <hr/>
            </div>
            <div className='mx-4'>
                <h1 className='mt-4 font-bold'>Acknowledge Agreement </h1>
                <small className='leading-none  text-xs'>By completing the order you agreed to <a>Policy Terms</a> and<a> Terms & Conditions ,and confirm the Declaration on behalf of all persons to be insured.</a> </small>
            </div>
            
        </div>
        <div className='flex items-center mx-auto bg-white w-full h-20 rounded-t-lg md:hidden' >
            <div className='mx-auto'>
                <button className=' bg-gray-100 px-2 py-2 rounded-lg mr-2 mb-2 '><ArrowBackIosIcon   className='ml-2'/></button>
                <Link to='/confirm'>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center mr-2 mb-2">Pay {props} SAR</button>
                </Link>   
            </div>
        </div>
        <div className=' md:flex hidden mx-auto mt-10 items-center w-full'>
        <button  className='flex hover:text-purple-700'> <ArrowBackIosIcon/>back</button>
            <button className='border-solid border-2 border-purple-500 font-medium rounded-lg text-sm px-10 py-2 text-center mx-4 mb-2 hover:bg-gray-200'> Download Quotaion</button>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm w-2/3 py-2.5 text-center mx-4 mb-2">Pay Now</button>
        </div>
    </div>

  )
}
