import React, { useState } from 'react';
import HouseCardList from '../components/houseCard/HouseCardList';
import FilterComponent from '../components/filter component/FilterComponent';
import { useNavigate } from 'react-router';

export const AnnouceContainer = () => {
  const navigate = useNavigate();

  const [filteredHouses, setFilteredHouses] = useState([]);

  const handleFilter = (filterCriteria) => {
    const initialHouses = [
      { id: 1, price: 500, area: "Area 1", composition: "s+1" },
      { id: 2, price: 3000, area: "Area 2", composition: "s+2" },
      { id: 3, price: 1000, area: "Area 1", composition: "s+1" },
      { id: 4, price: 2514, area: "Area 2", composition: "s+1" },
      { id: 5, price: 1400, area: "Area 1", composition: "s0" },
      // Add more houses as needed
    ];

    const { priceRange, area, composition } = filterCriteria;

    // Convert selected area to lowercase for case-insensitive comparison
    const lowerCaseArea = area.toLowerCase();

    // Filter by price range
    const filteredByPrice = initialHouses.filter((house) => {
      const priceInRange =
        (!priceRange.min || house.price >= parseFloat(priceRange.min)) &&
        (!priceRange.max || house.price <= parseFloat(priceRange.max));

      return priceInRange;
    });

    // Filter by area (case-insensitive)
    const filteredByArea = lowerCaseArea
      ? filteredByPrice.filter((house) => house.area.toLowerCase() === lowerCaseArea)
      : filteredByPrice;

    // Filter by composition
    const filteredByComposition = composition
      ? filteredByArea.filter((house) => house.composition === composition)
      : filteredByArea;

    // Update the state with the filtered results
    setFilteredHouses(filteredByComposition);

    // After applying filters, navigate to the results page
    navigate('/announces');
  };

  return (
    <div className='filter-section'>
      <FilterComponent onFilter={handleFilter} />
    </div>
  );
};
