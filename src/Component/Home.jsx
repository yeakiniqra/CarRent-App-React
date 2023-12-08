// Home.js
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    pickupLocation: '',
    returnLocation: '',
    pickupDateTime: '',
    returnDateTime: '',
  });
  const handleSearch = () => {
    // ekhane state update kore navigate kore dibo
    setSearchData((prevSearchData) => {
    
      // Navigate to CarList and pass the updated data
      navigate('/CarList', { state: prevSearchData });
      return prevSearchData; // Return the updated state
    });
  };
  

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("https://shorturl.at/chlnS")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white p-8 mb-4 rounded-lg shadow-lg z-10 flex flex-col items-center bg-opacity-50 md:backdrop-blur-lg">
        <h1 className="text-2xl font-bold mb-4">Choose Your Location</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 ">Pickup Location</label>
            <input type="text" id="pickupLocation" value={searchData.pickupLocation}
          onChange={(e) => setSearchData({ ...searchData, pickupLocation: e.target.value })}
             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200" />
          </div>
          <div>
            <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700">Return Location</label>
            <input type="text" id="returnLocation" value={searchData.returnLocation} onChange={(e) => setSearchData({ ...searchData, returnLocation: e.target.value })} 
             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200" />
          </div>
          <div>
            <label htmlFor="pickupDateTime" className="block text-sm font-medium text-gray-700">Pickup Date & Time</label>
            <input type="datetime-local" id="pickupDateTime" value={searchData.pickupDateTime} onChange={(e) => setSearchData({ ...searchData, pickupDateTime: e.target.value })}
             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200" />
          </div>
          <div>
            <label htmlFor="returnDateTime" className="block text-sm font-medium text-gray-700">Return Date & Time</label>
            <input type="datetime-local" id="returnDateTime" value={searchData.returnDateTime} onChange={(e) => setSearchData({ ...searchData, returnDateTime: e.target.value })}
             className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200" />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="mt-4 bg-lime-800 text-white p-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300"
        >
          Search
        </button>
      </div>

       
      
    </div>
  );
};

export default Home;
