import React, { useState } from 'react';
import HotelCard from './HotelCard';
import hotel from './images/hotel.jpeg';
import '.package/package.css'
// import backgroundImage from './images/back.jpg';

const App = () => {

  const mumbaiHotels = [
    { 
      name: 'Hotel Sea View', 
      city: 'Mumbai' ,
      price: 1500, 
      image: `${hotel}` 
    },
    { 
      name: 'Holiday Inn', 
      city: 'Mumbai',
      price: 3500, 
      image: `${hotel}` 
    },
    { 
      name: 'Ramada Palace', 
      city: 'Mumbai', 
      price: 2000, 
      image: `${hotel}` 
    },
    { 
      name: 'The Lalit', 
      city: 'Mumbai',
      price: 5000, 
      image: `${hotel}` 
    },    
    // Add more hotel objects for Mumbai as needed
  ];

  const delhiHotels = [
    { 
      name: 'Radisson Hotel', 
      city: 'Delhi' ,
      price: 1500, 
      image: `${hotel}` 
    },
    { 
      name: 'JW Marriott', 
      city: 'Delhi',
      price: 3500, 
      image: `${hotel}` 
    },
    { 
      name: 'The Paradise', 
      city: 'Delhi',
      price: 2000, 
      image: `${hotel}` 
    },
    { 
      name: 'TownHouse', 
      city: 'Delhi',
      price: 5000, 
      image: `${hotel}` 
    },
    // Add more hotel objects for Delhi as needed
  ];

  const bangaloreHotels = [
    { 
      name: 'Beacon Estate', 
      city: 'Bangalore' ,
      price: 1500, 
      image: `${hotel}` 
    },
    { 
      name: 'West End Hotel', 
      city: 'Bangalore',
      price: 3500, 
      image: `${hotel}` 
    },
    { 
      name: 'Orchid Palace', 
      city: 'Bangalore',
      price: 2000, 
      image: `${hotel}` 
    },
    { 
      name: 'The TAJ', 
      city: 'Bangalore',
      price: 5000, 
      image: `${hotel}` 
    },
    // Add more hotel objects for Bangalore as needed
  ];

  // State to hold the price range
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [cityFilter, setCityFilter] = useState('');

  // Function to filter hotels based on price range
  const filterHotelsByPrice = (hotels) => {
    let filteredHotels = hotels;
  
    // Filter by price range
    if (minPrice !== null && maxPrice !== null) {
      filteredHotels = filteredHotels.filter(hotel => hotel.price >= minPrice && hotel.price <= maxPrice);
    }
  
    // Filter by city
    if (cityFilter !== '') {
      filteredHotels = filteredHotels.filter(hotel => hotel.city.toLowerCase() === cityFilter.toLowerCase());
    }
  
    return filteredHotels;
  };
  
  // State to hold whether the search button has been clicked
const [searchClicked, setSearchClicked] = useState(false);

// Function to handle the search button click
const handleSearch = () => {
  // Set the searchClicked state to true
  setSearchClicked(true);
};

// Render hotel cards for Mumbai hotels
const renderMumbaiHotelCards = () => {
  // Render hotel cards only if search button has been clicked
  if (searchClicked) {
    const filteredHotels = filterHotelsByPrice(mumbaiHotels);
    return filteredHotels.map(hotel => (
      <HotelCard
        key={hotel.name}
        name={hotel.name}
        price={hotel.price}
        image={hotel.image}
        city={hotel.city}
      />
    ));
  }
  return null;
};

// Render hotel cards for Delhi hotels
const renderDelhiHotelCards = () => {
  // Render hotel cards only if search button has been clicked
  if (searchClicked) {
    const filteredHotels = filterHotelsByPrice(delhiHotels);
    return filteredHotels.map(hotel => (
      <HotelCard
        key={hotel.name}
        name={hotel.name}
        price={hotel.price}
        image={hotel.image}
        city={hotel.city}
      />
    ));
  }
  return null;
};

// Render hotel cards for Bangalore hotels
const renderBangaloreHotelCards = () => {
  // Render hotel cards only if search button has been clicked
  if (searchClicked) {
    const filteredHotels = filterHotelsByPrice(bangaloreHotels);
    return filteredHotels.map(hotel => (
      <HotelCard
        key={hotel.name}
        name={hotel.name}
        price={hotel.price}
        image={hotel.image}
        city={hotel.city}
      />
    ));
  }
  return null;
};
  
  return (
    <div className="app" >
      <div className="price-filter">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice || ''}
          onChange={e => setMinPrice(e.target.value === '' ? null : parseInt(e.target.value))}
          className="price-input"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice || ''}
          onChange={e => setMaxPrice(e.target.value === '' ? null : parseInt(e.target.value))}
          className="price-input"
        />
        <input
        type="text"
        placeholder="Enter city name"
        onChange={e => setCityFilter(e.target.value)}
        className="city-filter"
      />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="hotel-cards">
        {/* Render Mumbai hotel cards */}
        {renderMumbaiHotelCards()}
        {/* Render Delhi hotel cards */}
        {renderDelhiHotelCards()}
        {/* Render Bangalore hotel cards */}
        {renderBangaloreHotelCards()}
      </div>
    </div>
  );
};

export default App;