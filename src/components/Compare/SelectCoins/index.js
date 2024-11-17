// import React, { useEffect, useState } from "react";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import "./styles.css";
// import SelectDays from "../../Coin/SelectDays";
// function SelectCoins({
//   allCoins,
//   crypto1,
//   crypto2,
//   handleCoinChange,
//   days,
//   handleDaysChange,
// }) {
//   const style = {
//     height: "2.5rem",
//     color: "var(--white)",
//     "& .MuiOutlinedInput-notchedOutline": {
//       borderColor: "var(--white)",
//     },
//     "& .MuiSvgIcon-root": {
//       color: "var(--white)",
//     },
//     "&:hover": {
//       "&& fieldset": {
//         borderColor: "var(--blue)",
//       },
//     },
//   };

//   return (
//     <div className="select-coins-flex">
//       <p>Crypto 1</p>
//       <Select
//         sx={style}
//         value={crypto1}
//         label="Crypto1"
//         onChange={(event) => handleCoinChange(event, false)}
//       >
//         {allCoins
//           .filter((coin) => coin.id !== crypto2)
//           .map((item, i) => (
//             <MenuItem key={i} value={item.id}>
//               {item.name}
//             </MenuItem>
//           ))}
//       </Select>
//       <p>Crypto 2</p>
//       <Select
//         sx={style}
//         value={crypto2}
//         label="Crypto2"
//         onChange={(event) => handleCoinChange(event, true)}
//       >
//         {allCoins
//           .filter((coin) => coin.id !== crypto1)
//           .map((item, i) => (
//             <MenuItem key={i} value={item.id}>
//               {item.name}
//             </MenuItem>
//           ))}
//       </Select>
//       <SelectDays
//         days={days}
//         handleDaysChange={handleDaysChange}
//         noPTag={true}
//       />
//     </div>
//   );
// }

// export default SelectCoins;
