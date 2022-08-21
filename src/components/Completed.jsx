import React from 'react'
import { Link } from 'react-router-dom';
import success from '../images/success-icon.png'

export const Completed = () => {
  return (
    <div className=" m-32 shadow-lg rounded-lg h-3/6 bg-white p-20 flex flex-col justify-center items-center">
      <div>
        <img src={success} alt="payment successful" className="w-16 h-16"></img>
      </div>
      <div>
        <h2 className="text-center text-blue-900 font-bold text-3xl my-4">
          Purchase Completed
        </h2>
        <p className="text-gray-500 mb-8">
          Please check your email for details concerning this transaction
        </p>
        <Link to="/" className="mt-8 text-start underline text-amber-500">
          Return Home
        </Link>
      </div>
    </div>
  );
}
