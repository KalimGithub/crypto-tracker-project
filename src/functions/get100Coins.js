import axios from "axios";

export const get100Coins=()=>{
   const myCoins =  axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_dasc&per_page=100&sparkline=false"
    )
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

    
    return myCoins
}