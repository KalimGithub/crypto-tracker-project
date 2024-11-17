import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { convertObject } from "../functions/convertObject";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../components/Coin/PriceType";
import Footer from "../components/Common/Footer";

function CoinPage() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setdays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      convertObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        // console.log("prices fetched successfully");
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setdays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      // console.log("prices fetched successfully");
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handlePriceValueChange = async (event, newType) => {
    // setIsLoading(true);
    setPriceType(newType);
    // console.log(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="gray-wrapper">
            <List coin={coinData} />
          </div>
          <div className="gray-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceType
              priceType={priceType}
              handlePriceValueChange={handlePriceValueChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo name={coinData.name} desc={coinData.desc} />
          <Footer />
        </>
      )}
    </>
  );
}

export default CoinPage;
