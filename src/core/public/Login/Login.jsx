import React from 'react'

const Login = () => {
    return (
        <>
            <div className='min-h-screen bg-gray-500 flex justify-center items-center'>
                <div className='p-4 border rounded-lg shadow-md flex flex-col justify-center'>
                    <div className='title flex justify-center items-center'>
                        <h1 className='text-3xl font-semibold'>Login</h1>
                    </div>

                    <div className='flex flex-col gap-y-4 mt-6 '>
                        <input type="email" className='w-72 h-12 rounded-md px-2' placeholder='Enter your email' />
                        <input type="password" className='mt-2 w-72 h-12 rounded-md px-2' placeholder='Enter your password' />
                    </div>
                    <button className='bg-gray-700 rounded-lg p-2 mt-3' >
                        login
                    </button>
                    <div className='forget'>
                        <h1 className='text-2xl'> Forget Password</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login