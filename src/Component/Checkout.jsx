// src/Component/CheckoutPage.jsx
import React, { useState }  from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { state } = useLocation();
  const selectedCar = state?.selectedCar;
  const searchData = state?.searchData;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

const handleCheckout = () => {
   
    // Show the confirmation pop-up
    setShowConfirmation(true);
  };
  const handleCloseConfirmation = () => {
    // Close the confirmation pop-up
    setShowConfirmation(false);

    // Redirect to the homepage
    navigate('/');
  };
  const calculateTotalPrice = () => {
    const pickupDate = new Date(searchData?.pickupDateTime);
    const returnDate = new Date(searchData?.returnDateTime);

    // Calculate the difference in days
    const timeDifference = returnDate.getTime() - pickupDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Calculate total price
    const totalPrice = selectedCar?.pricePerDay * daysDifference;
    return totalPrice || 0;
  };
    

  const formatDateTime = (dateTime) => {
    const formattedDate = new Date(dateTime).toLocaleDateString('en-US');
    const formattedTime = new Date(dateTime).toLocaleTimeString('en-US');
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="container mx-auto mt-8 h-screen">
        <div className="text-xl font-bold mb-4 text-center">Checkout & Billing</div>
      {/* Display user input data */}
      <div className="ml-4 bg-gray-100 p-4 rounded shadow-md">
        <div className="mb-2 text-lg font-semibold">
          Pickup Location: <span className="text-green-500">{searchData?.pickupLocation}</span>
          <p className="mb-2 text-lg font-semibold">
            Pickup Date: <span className="text-green-500">{searchData?.pickupDateTime && formatDateTime(searchData?.pickupDateTime)}</span>
          </p>
        </div>
        <div className="mb-2 text-lg font-semibold">
          Return Location: <span className="text-purple-500">{searchData?.returnLocation}</span>
          <p className="mb-2 text-lg font-semibold">
            Return Date: <span className="text-purple-500">{searchData?.returnDateTime && formatDateTime(searchData?.returnDateTime)}</span>
          </p>
        </div>
      </div>

      {/* Display selected car details */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md flex items-center">
        {/* Car details on the left side */}
        <div className="flex-grow">
          <div className="text-lg font-semibold">{selectedCar?.model}</div>
          <div className="text-gray-600">Price per Day: ${selectedCar?.pricePerDay}</div>
        </div>

        {/* Car image on the right side  */}
        <img 
          src={selectedCar?.image}
          alt={selectedCar?.model}
          className="ml-4 w-20 h-20 rounded-md transition-transform transform hover:scale-105 "
        />
      </div>

       {/* Total Price */}
       <div className="mt-4 text-lg font-bold bg-red-100 p-4 rounded shadow-md ">
        Total Price: ${calculateTotalPrice()}
      </div>

       {/* Checkout button */}
       <div className="flex justify-center mt-4">
       <button
        onClick={() => handleCheckout(selectedCar)} // Add a function to handle the checkout action
        className="mt-4 mx-auto bg-green-500 text-white p-2 px-4 font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Checkout
      </button>
      </div>
       {/* Confirmation pop-up */}
       {showConfirmation && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-xl font-semibold mb-2">Congratulations! Your reservation is confirmed!</p>
            <button
              className="mx-auto bg-green-500 text-white px-5 py-1 rounded-md hover:bg-lime-700 focus:outline-none focus:ring focus:border-blue-300 block"
              onClick={handleCloseConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
   
  );
};

export default Checkout;
