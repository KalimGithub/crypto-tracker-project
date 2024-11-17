import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./styles.css";
export default function TooglePriceType({priceType, handlePriceValueChange}) {
  

  return (
    <div className="toggle-price">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceValueChange}
        sx={{
          "& .Mui-selected": {
            color: "var(--blue) !important",
            backgroundColor:"#23363b",
            // fontWeight:"500"
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue)",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">PRICE</ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">MKT CAP</ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">VOLUME</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
