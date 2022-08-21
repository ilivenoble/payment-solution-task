import React, {useState} from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Personal = () => {
const [formData, setFormData] = useState(
        {
            clientName: "", 
            email: "", 
            address1: "", 
            address2: "", 
            lga: "",
            state: "",
        })
const navigate = useNavigate();
const location = useLocation()

function handleChange(event) {
  console.log(event);
  const { name, value } = event.target;
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [name]:  value
    };
  });
}

function handleSubmit(e){
    e.preventDefault()
    navigate('/billing')
}
    
  return (
    <div>
      <header className="mt-8 mb-2 ">
        <h2 className="text-blue-900 mb-4 text-3xl font-bold">
          Complete your Purchase
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-400 pb-2">
          <Link to="/">
            <a
              className={`mr-4 my-auto hover:text-amber-400 font-normal font-serif text-lg ${
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
                  : "text-brand-darkblue"
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
                  : "text-brand-darkblue"
              }`}
            >
              {" "}
              Confirm Payment
            </a>
          </Link>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block font-bold" htmlFor="clientName">
            Name
          </label>
          <input
            className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
            id="clientName"
            type="text"
            name="cleintName"
            value={formData.clientName}
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-bold" htmlFor="email">
            Email address<span className="text-red-500">*</span>
            <p className="text-gray-500 text-xs">
              The purchase receipt will be sent to this email
            </p>
          </label>
          <input
            className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email address"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-bold" htmlFor="address1">
            Address 1
          </label>
          <input
            className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
            id="address1"
            type="text"
            name="address1"
            value={formData.address1}
            placeholder="enter first address"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-bold" htmlFor="address2">
            Address 2
          </label>
          <input
            className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
            id="address2"
            type="text"
            name="address2"
            value={formData.address2}
            placeholder="enter first address"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between">
          <div>
            <label className="block font-bold" htmlFor="lga">
              Local Government
            </label>
            <input
              className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
              type="text"
              name="lga"
              value={formData.lga}
              placeholder="Enter local government"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-bold" htmlFor="state">
              State
            </label>
            <select
              className="w-fit mt-2 mb-3 py-3 pl-3 rounded border border-slate-600"
              id="state"
              value={formData.state}
              name="state"
              onChange={handleChange}
            >
              <option value="Lagos">Lagos</option>
              <option value="Abia">Abia</option>
              <option value="FCT">FCT</option>
            </select>
          </div>
        </div>
        <div className="flex mt-8">
          <button
            className="bg-gradient-to-b from-amber-200 to-amber-400 py-2 px-14 rounded text-white font-bold mr-14"
            type="submit"
          >
            Next
          </button>
          <button className="text-blue-900 font-bold" type="reset">
            Cancel Payment
          </button>
        </div>
      </form>
    </div>
  );
}
