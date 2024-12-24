import React from 'react'
import "./DemoForm.scss"

const DemoForm = () => {
    return (
        <form className='demo-form'>
            <div className='form-row flex justify-between gap-4 mb-4'>
                <input id='name' placeholder="First name" className='w-6/12 bg-form-fields p-3 rounded text-prim-txt text-sm placeholder:text-sec-txt'></input>
                <input id='name' placeholder="Last name" className='w-6/12 bg-form-fields p-3 rounded  text-prim-txt text-sm placeholder:text-sec-txt'></input>
            </div>

            <div className='flex flex-col mb-4'>
                <input id='name' placeholder="Email" className='bg-form-fields p-3 rounded-md text-sm text-prim-txt placeholder:text-sec-txt'></input>
            </div>
            <div className='flex flex-col mb-4'>
                <input id='name' placeholder="Password" className='bg-form-fields p-3 rounded-md text-sm text-prim-txt placeholder:text-sec-txt'></input>
            </div>

            <div className='flex justify-center'>
                <button type="submit" className='submit-btn mt-3 py-2 px-4 w-full rounded-md text-prim-txt tracking-wider'>Create account</button>
            </div>

            <div className='flex justify-between items-center my-5'>
                <div className='divider'></div>
                <span className='text-xs'>Or register with</span>
                <div className='divider'></div>
            </div>

            <div className='flex gap-4'>
                <button className='flex p-3 w-6/12 justify-center items-center border border-customGray rounded'>
                    <div className='h-[18px] w-[20px] mr-2'>
                        <img src='/google.png' className='w-full h-full' />
                    </div>
                    <span>Google</span>
                </button>

                <button className='flex p-3 w-6/12 justify-center items-center border border-customGray rounded'>
                    <div className='h-[18px] w-[20px] mr-2'>
                        <img src='/apple.png' className='w-full h-full' />
                    </div>
                    <span>Apple</span>
                </button>
            </div>
        </form>
    )
}

export default DemoForm