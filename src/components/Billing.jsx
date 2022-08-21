import React, {useState} from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Billing = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [formData, setFormData] = useState({
      nameOnCard: "",
      cardType: "",
      cardDetails: "",
      expiryDate: "",
      cvv: "",
    });

    function handleChange(event) {
      console.log(event);
      const { name, value } = event.target;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    }

function handleSubmit(e) {
  e.preventDefault();
  navigate("/confirm");
}

  return (
    <div>
      <header className="mt-12 mb-12">
        <h2 className="text-blue-900 my-8 text-3xl font-bold">
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

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block font-bold" htmlFor="nameOnCard">
            Name on Card <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
            id="nameOnCard"
            name="nameOnCard"
            type="text"
            value={formData.nameOnCard}
            placeholder="Enter name on Card"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-bold" htmlFor="cardType">
            Card Type <span className="text-red-500"> *</span>
          </label>
          <select
            className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
            id="cardType"
            name="cardType"
            value={formData.cardType}
            onChange={handleChange}
            required
          >
            <option value="Visa">Visa</option>
            <option value="Verve">Verve</option>
            <option value="Mastercard">Mastercard</option>
          </select>
        </div>
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="grow w-full">
            <label className="block font-bold" htmlFor="cardDetails">
              Card Details <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
              id="cardDetails"
              type="text"
              value={formData.cardDetails}
              name="cardDetails"
              onChange={handleChange}
              placeholder="0000 0000 0000 0000"
              required
            />
          </div>

          <div className="w-full">
            <label className="block font-bold" htmlFor="expiryDate">
              Expiry date <span className="text-red-500">*</span>
            </label>
            <input
              className=" mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
              id="expiryDate"
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="04 / 25"
              required
            />
          </div>

          <div className="w-2/5">
            <label className="block font-bold" htmlFor="cvv">
              CVV <span className="text-red-500">*</span>
            </label>
            <input
              className="mt-2 mb-3 py-2 pl-3 rounded border border-slate-600"
              id="cvv"
              type="number"
              name='cvv'
              value={formData.cvv}
              placeholder="123"
              onChange={handleChange}
              required
            />
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
