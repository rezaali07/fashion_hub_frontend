import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-semibold text-center text-primary">Login</h1>
                <form className="mt-6">
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-opacity-90"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs text-center text-gray-700">
                    Don't have an account?
                    <a href="#" className="text-primary hover:underline"> Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
