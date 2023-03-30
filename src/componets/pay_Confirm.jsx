import React from 'react'

export default function pay_Confirm() {

    const prop1=6190;
    const prop2=0;
    const prop3=25;
    const prop4=61.13;
  return (
    <div className='flex flex-col justify-evenly md:justify-stretch  md:w-8/12 mx-auto md:my-10 h-screen md:h-min '  >
        <div>
            <div className='flex items-center justify-between mx-8 mt-4'>
                <h1 className='font-bold'>Summary</h1>
                <button className='px-4  rounded-md flex py-2 bg-blue-600'>EDIT</button>
            </div>
            <div className='flex flex-col mx-5 rounded-lg bg-white mt-4'>
                <small className='ml-4'>Policy Coverage</small>
                    <input
                        defaultValue={'Suna'}
                        className='mb-2  ml-4'
                        type="email"
                    />
            </div>
        </div>
        <div className=''> 
            <h1 className='mx-6 mt-4'>Payment Details</h1>
            <div className='flex  mx-6 justify-between  items-center rounded-lg bg-white mt-5'>
                <label className='my-2  ml-4'>Premium</label>
                <span className='mr-4 font-bold'>{prop1}<small className=' ml-1 font-normal text-xs'>SAR</small></span>
            </div>
            <div className='flex  mx-6 justify-between  items-center rounded-t-lg bg-white mt-5'>
                <label className='my-2 ml-4'>Discount Amount</label>
                <span className='mr-4 font-bold'>{prop2}<small className=' ml-1 font-normal text-xs'>SAR</small></span>
                {/* <hr className=' mx-auto w-10/12'/> */}
            </div>
            
            <div className='flex flex mx-6 justify-between  items-center mx-6  py-4 bg-white '>
                <label className='mb-2 ml-4'>Administration Fee</label>
                {/* <hr className=' mx-auto w-10/12'/> */}
                <span className='mr-4 font-bold'>{prop3}<small className=' ml-1 font-normal text-xs'>SAR</small></span>
            </div>
            
            <div className='flex flex justify-between  items-center mx-6 rounded-b-lg bg-white '>
                <label className='mb-3 ml-4'>VAT amount(15%)</label>
                <span className='mr-4 font-bold'>{prop4}<small className=' ml-1 font-normal text-xs'>SAR</small></span>
            </div>
            <div className='flex  mx-6 justify-between  items-center rounded-lg bg-black text-white mt-5'>
                <label className='my-2  ml-4'> Total Premium</label>
                <span className='mr-4 font-bold'>{prop1}<small className=' ml-1 font-normal text-xs'>SAR</small></span>
            </div>
        </div>
        <div className='flex flex-col md:hidden'>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-16 py-2.5 text-center mx-4 mb-2">Pay Now</button>
            <button className='border-solid border-2 border-purple-500 font-medium rounded-lg text-sm px-16 py-2 text-center mx-4 mb-2 hover:bg-gray-200'> Download Quotaion</button>
            <button className='hover:border-solid hover:border-2 hover:border-red-500 font-medium rounded-lg text-sm px-16 py-2 text-center mx-4 mb-2'> Cancel</button>
        </div>
    </div>
  )
}
