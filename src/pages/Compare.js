import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import Loader from "../components/Common/Loader";
import SelectDays from "../components/Coin/SelectDays";
import List from "../components/Dashboard/List";
import { getCoinData } from "../functions/getCoinData";
import { convertObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { get100Coins } from "../functions/get100Coins";
import CoinInfo from "../components/Coin/CoinInfo";
import LineChart from "../components/Coin/LineChart";
import { settingChartData } from "../functions/settingChartData";
import TooglePriceType from "../components/Coin/PriceType";
import Footer from "../components/Common/Footer";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState([]);
  const [crypto2Data, setCrypto2Data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [allCoins, setAllCoins] =useState([])
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(()=>{
    getData();
  },[])
async function getData(){
  
}
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const myCoins = await get100Coins();
    if (myCoins) {
      setAllCoins(myCoins);
      const data1 = await getCoinData(crypto1);
      const data2 = await getCoinData(crypto2);
      convertObject(setCrypto1Data, data1);
      convertObject(setCrypto2Data, data2);
      if (data1 && data2) {
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        // console.log("both prices fetched ", prices1, prices2);
        settingChartData(setChartData, prices1, prices2)
        setIsLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      const newCrypto2 = event.target.value;
      setCrypto2(newCrypto2);
      const data = await getCoinData(newCrypto2);
      // console.log(data);
      convertObject(setCrypto2Data, data);
        const prices1 = await getCoinPrices(crypto1, days, priceType)
      const prices2 = await getCoinPrices(newCrypto2, days, priceType)
      settingChartData(setChartData, prices1, prices2)
    } else {
      const newCrypto1 = event.target.value;
      setCrypto1(newCrypto1);
      const data = await getCoinData(newCrypto1);
      convertObject(setCrypto1Data, data);
      const prices1 = await getCoinPrices(newCrypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
    }
    setIsLoading(false);
  };
  const handleDaysChange = async (event) => {
    const newDays = event.target.value;
    setDays(newDays);
    const prices1 = await getCoinPrices(crypto1, newDays, priceType);
    const prices2 = await getCoinPrices(crypto2, newDays, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };
  const handlePriceValueChange = async (event) => {
    setPriceType(event.target.value);
    const prices1 = await getCoinPrices(crypto1, days, event.target.value);
    const prices2 = await getCoinPrices(crypto2, days, event.target.value);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoins
              allCoins={allCoins}
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
              days={days}
              handleDaysChange={handleDaysChange}
            />
          </div>
          <div className="gray-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="gray-wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="gray-wrapper">
            <TooglePriceType priceType={priceType} handlePriceValueChange={handlePriceValueChange}/>
            <LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
          </div>
          <CoinInfo name={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo name={crypto2Data.name} desc={crypto2Data.desc} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default ComparePage;
