import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { coinObject } from "../functions/convertObject";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";

function CoinPage() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setdays] = useState(30);
  const [chartData, setChartData]= useState({})
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if(prices){
        console.log('prices fetched successfully');
        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              backgroundColor: "rgb(40,90,144,0.1)",
              borderWidth: 1,
              fill: true,
              tension: 0.25,
              pointRadius: 0,
            },
          ],
        });
        setIsLoading(false)
      }
    }
  }
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
            <LineChart chartData={chartData}/>
          </div>
          <CoinInfo name={coinData.name} desc={coinData.desc} />
        </>
      )}
    </>
  );
}

export default CoinPage;
