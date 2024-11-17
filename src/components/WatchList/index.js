import React, { useEffect, useState } from "react";
import "./styles.css";
import TabsComponent from "../Dashboard/Tabs/TabsComponent";
import { get100Coins } from "../../functions/get100Coins";
function WatchListComponent() {

  const [coins, setCoins] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await get100Coins();
    console.log(data);
    if(data){
        setCoins(data);
    }
  };

  return (
    <div className="watchlist">
      <TabsComponent coins={coins}/>
    </div>
  );
}

export default WatchListComponent;
