import React from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion, spring } from "framer-motion";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/conertNumbers";
import { Link } from "react-router-dom";

function List({ coin, index }) {
  return (
    <Link to={`/coins/${coin.id}`}>
      <>
      <motion.tr
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: spring, duration: 0.5 }}
        className="list-row"
      >
        <Tooltip title="Logo" placement="bottom-start">
          <td className="td-image">
            <img className="coin-logo" src={coin.image} />
          </td>
        </Tooltip>
        <td>
          <div className="name-col td-name-col">
            <Tooltip title="Symbol" placement="bottom">
              <p className="coin-symbol">{coin.symbol}-USD</p>
            </Tooltip>
            <Tooltip title="Name" placement="bottom">
              <p className="coin-name">{coin.name}</p>
            </Tooltip>
          </div>
        </td>
        <Tooltip title="Price change" placement="bottom-end">
          <td className="data-div">
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
                <div className="chip-icon red-icon">
                  <TrendingDownRoundedIcon />
                </div>
              </div>
            )}
          </td>
        </Tooltip>
        <Tooltip title="Current Price" placement="bottom-end">
          <td
            className="coin-current-price-list td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            <h3>${coin.current_price.toLocaleString()}</h3>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
          <td className="td-right-align desktop-total-volume">
            <p className="coin-total-volume">
              ${coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
          <td className="td-right-align mobile-total-volume">
            <p className="coin-total-volume">
              ${convertNumber(coin.total_volume)}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="coin-market-cap td-right-align">
            <p>${coin.market_cap.toLocaleString()}</p>
          </td>
        </Tooltip>
      </motion.tr>
      </>
    </Link>
  );
}

export default List;
