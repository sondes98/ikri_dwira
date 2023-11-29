import React, { useState } from 'react';
import "./filter.css";
import PriceSlider from './PriceSlider';

const FilterComponent = ({ onFilter }) => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedComposition, setSelectedComposition] = useState('');
  
    const handlePriceChange = (newValue) => {
      setPriceRange({ min: newValue[0], max: newValue[1] });
    };
  
    const handleAreaChange = (e) => {
      setSelectedArea(e.target.value);
    };
  
    const handleCompositionChange = (e) => {
      setSelectedComposition(e.target.value);
    };
  
    const handleFilterClick = () => {
      // Ensure that the filter criteria are correctly structured
      const filterCriteria = {
        priceRange: {
          min: parseFloat(priceRange.min),
          max: parseFloat(priceRange.max),
        },
        area: selectedArea,
        composition: selectedComposition,
      };
      console.log("Filter Criteria:", filterCriteria);
      // Send the filter criteria to the parent component
      onFilter(filterCriteria);
    };

    return (
        <div className='cont'>
            <label htmlFor="minPrice">fix the price</label>
            <PriceSlider priceRange={priceRange} onChange={handlePriceChange} />
            <label htmlFor="area">Area:</label>
            <select id="area" value={selectedArea} onChange={handleAreaChange}>
                <option value="">Select an Area</option>
                <option value="area 1">Area 1</option>
                <option value="area 2">Area 2</option>
                {/* Add more area options as needed */}
            </select>
            <label htmlFor="composition">Composition:</label>
            <select id="composition" value={selectedComposition} onChange={handleCompositionChange}>
                <option value="">Select a Composition</option>
                <option value="s0">s0</option>
                <option value="s+1">s+1</option>
                <option value="s+2">s+2</option>
                <option value="s+3">s+3</option>
                <option value="&gt; s+2">&gt; s+2</option>
                {/* Add more composition options as needed */}
            </select>
            <button onClick={handleFilterClick}>Apply Filter</button>
        </div>
    );
};

export default FilterComponent;
