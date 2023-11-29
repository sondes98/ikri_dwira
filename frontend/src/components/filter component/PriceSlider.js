import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./PriceSlider.css";
function valuetext(value) {
  return `${value}dnt`;
}

const minPrice = 0;
const maxPrice = 5000;

export default function PriceSlider({ priceRange, onChange }) {
  const handleChange1 = (event, newValueObj, activeThumb) => {
    const { 0: newValueMin, 1: newValueMax } = newValueObj;

    const clampedValue = [
      Math.max(minPrice, Math.min(newValueMin, priceRange.max - minPrice)),
      Math.min(maxPrice, Math.max(newValueMax, priceRange.min + minPrice)),
    ];

    onChange(clampedValue);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Price Range"}
        value={[priceRange.min, priceRange.max]}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={minPrice}
        max={maxPrice}
        sx={{
          "& span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeMedium.css-1g8npcy-MuiSlider-root":
            {
              backgroundColor: "#D8BE96", // Customize thumb color
              border: " 1px solid #D8BE96",
            },
          "& .MuiSlider-thumb": {
            backgroundColor: "#D8BE96", // Customize thumb color
            transition: "background-color 0.3s ease", // Add a smooth transition
          },
          "& .MuiSlider-thumb:hover": {
            backgroundColor: "rgba(216, 190, 150, 0.8)", // Transparent color on hover
            boxShadow: "0px 0px 0px 8px #d8be9659", // Box shadow on hover
          },
          "& .MuiSlider-track": {
            backgroundColor: "#D8BE96", // Customize track color
            color: "D8BE96",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#D8BE96", // Customize rail color
            color: "D8BE96",
          },
        }}
      />
    </Box>
  );
}
