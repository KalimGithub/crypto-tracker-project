import React from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion, spring } from "framer-motion";
import { Link } from "react-router-dom";
function Grid({ coin }) {
  return (
    <Link to={`/coins/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: spring, duration: 1 }}
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="grid-info">
          <img className="coin-logo" src={coin.image} />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}-USD</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        <div className="data-div">
          {coin.price_change_percentage_24h > 0 ? (
            <div className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="chip-icon">
                <TrendingUpRoundedIcon />
              </div>
            </div>
          ) : (
            <div className="chip-flex">
              <div className="price-chip red-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="red-icon">
                <TrendingDownRoundedIcon />
              </div>
            </div>
          )}
        </div>
        <div
          className="coin-current-price"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </div>
        <div className="coin-volume-market-cap">
          <p className="coin-total-volume">
            Total Volume : ${coin.total_volume.toLocaleString()}
          </p>
          <p className="coin-market-cap">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default Grid;
