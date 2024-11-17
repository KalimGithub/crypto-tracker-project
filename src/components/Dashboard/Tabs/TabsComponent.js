import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Styles.css";
import Grid from '../Grid/index.js'
import List from "../List/index.js";
export default function TabsComponent({ coins }) {
  console.log(coins);
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  return (
    <div sx={style}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          variant="fullWidth"
          aria-label="lab API tabs example"
        >
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i}/>
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((coin, i) => {
              return <List coin={coin} key={i}/>;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
