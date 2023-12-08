import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';


const CarList = () => {
  // Access the dynamic data passed from the Home page using useLocation
  const { state: searchData } = useLocation();
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //fetching the data here basically
    const fetchData = async () => {
      try {
        const data = await import('./cars.json');
        // Shuffle the array of cars
        const shuffledCars = shuffleArray(data.default);
        // Take the first 6 cars
        setCars(shuffledCars.slice(0, 6));
      }
       catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchData();
  }, []);

  const shuffleArray = (array) => {
    // Function to shuffle an array using the Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleRentNow = (carId) => {
    // Find the selected car based on carId
    const selectedCar = cars.find((car) => car.id === carId);
    navigate('/checkout', { state: { selectedCar, searchData } });

  };


  // Function to format date and time
  const formatDateTime = (dateTime) => {
    const formattedDate = new Date(dateTime).toLocaleDateString('en-US');
    const formattedTime = new Date(dateTime).toLocaleTimeString('en-US');
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="text-xl font-bold mb-4 text-center mt-6">Choose Your Vehicle</div>

      {/* Display user input data */}
      <div className="ml-4 bg-gray-100 p-4 rounded shadow-md">
  <div className="mb-2 text-lg font-semibold"> Pickup Location: <span className="text-green-500">{searchData?.pickupLocation}</span> 
  <p className="mb-2 text-lg font-semibold">Pickup Date:<span className="text-green-500"> {searchData?.pickupDateTime  && formatDateTime(searchData?.pickupDateTime)}</span></p>
  </div>
  <div className="mb-2 text-lg font-semibold">Return Location:<span className="text-purple-500"> {searchData?.returnLocation}</span>
  <p className="mb-2 text-lg font-semibold"> Return Date: <span className="text-purple-500"> {searchData?.returnDateTime && formatDateTime(searchData?.returnDateTime)}</span> </p>
  </div>
</div>

        {/* Display car list.ekhane map use data destructure korano hoise */}
        <div className="grid grid-cols-1 mt-5 mb-7 md:grid-cols-2 lg:grid-cols-3 gap-4">
     
        {cars.map((car) => (
          <div key={car.id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <img src={car.image} alt={car.model} className="mb-2 rounded-md" />
            <div className="text-lg font-semibold">{car.model}</div>
            <div className="text-gray-600">Price per Day: ${car.pricePerDay}</div>
            <button
              onClick={() => handleRentNow(car.id)}
              className="mt-2 text-white p-2  bg-green-500 rounded-lg hover:bg-lime-700 focus:outline-none focus:ring focus:border-lime-300"
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
