import React, {useState} from 'react'
import {Link , useLocation} from 'react-router-dom';

export const Confirm = () => {
    const [paid, setPaid] = useState(false)
    const location = useLocation();
  return (
    <div className="w-4/6">
      <header className="mt-8 mb-2">
        <h2 className="text-blue-900 mb-4 text-3xl font-bold">
          Complete your Purchase
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-400 pb-2">
          <Link to="/">
            <a
              className={`mr-4 my-auto hover:text-orange-600 font-normal font-serif text-lg ${
                location.pathname === "/"
                  ? "text-amber-500 sm:border-b-8 rounded-2 pb-2 border-amber-500"
                  : "text-blue-darkblue"
              }`}
            >
              Personal Info
            </a>
          </Link>

          <Link to="/billing">
            <a
              className={`mr-4 my-auto hover:text-orange-600 font-normal font-serif text-lg ${
                location.pathname === "/billing"
                  ? "text-amber-500 sm:border-b-8 rounded-2 pb-2 border-amber-500"
                  : "text-blue-darkblue"
              }`}
            >
              Billing Info
            </a>
          </Link>

          <Link to="/confirm">
            <a
              className={`mr-4 my-auto hover:text-orange-600 font-normal font-serif text-lg ${
                location.pathname === "/confirm"
                  ? "text-amber-500 sm:border-b-8 rounded-2 pb-2 border-amber-500"
                  : "text-blue-darkblue"
              }`}
            >
              Confirm Payment
            </a>
          </Link>
        </div>
      </header>

      <div className="mt-10">
        <div className="flex rounded-t-lg justify-between bg-blue-500 text-white font-bold py-2 px-6">
          <p>Item Name</p>
          <p>₦ Price</p>
        </div>
        <div className="bg-white rounded-b-lg p-8 shadow-lg">
          <div className="flex justify-between my-4">
            <p>Data science and usability</p>
            <p className="font-bold">50,000.00</p>
          </div>
          <div className="flex justify-between my-4">
            <p>Shipping</p>
            <p className="font-bold">0.00</p>
          </div>
          <hr />
          <div className="flex justify-between my-6 border-2 p-4 rounded-lg">
            <p>Total</p>
            <p className="font-bold">50,000.00</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8">
        <Link
          to="/completed"
          className="bg-gradient-to-b from-amber-200 to-amber-400 py-2 px-14 rounded text-white font-bold mr-14"
        >
          Pay
        </Link>

        <Link to="/" className="text-blue-900 font-bold">
          Cancel Payment
        </Link>
      </div>
    </div>
  );
}
