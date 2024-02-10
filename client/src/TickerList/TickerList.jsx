import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  StyledItem,
  StyledList,
  StyledListWrapper,
  StyledText,
  StyledTicker,
  StyledTimeWrapper,
  StyledWrapper,
} from "./TickerList.styled";
import sprite from "../images/symbol-defs.svg";
const socket = io("http://localhost:4000");

const TickerList = () => {
  const [tickerData, setTickerData] = useState([]);
  const [prevData, setPrevData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    socket.on("ticker", (quotes) => {
      setPrevData([...tickerData]);
      setTickerData(quotes);
      setIsLoading(false); // Set loading to false when data is received
    });

    socket.emit("start");

    return () => {
      socket.disconnect();
    };
  }, []);

  const getPriceColor = (currentPrice, prevPrice) => {
    if (currentPrice > prevPrice) {
      return "green";
    } else if (currentPrice < prevPrice) {
      return "red";
    } else {
      return "black";
    }
  };

  return (
    <StyledListWrapper>
      <h2>Ticker Data</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledList>
          {tickerData.map((quote, index) => {
            const prevQuote = prevData[index];
            const priceColor = getPriceColor(quote.price, prevQuote?.price);
            return (
              <StyledItem key={index}>
                <StyledTicker>{quote.ticker}</StyledTicker>
                <StyledText>{quote.price}$</StyledText>
                <StyledWrapper>
                  <p style={{ color: priceColor }}>{quote.change}</p>
                  <svg width={15} height={20}>
                    <use
                      style={{
                        fill: priceColor,
                      }}
                      href={`${sprite}#icon-arrow-${
                        priceColor === "green" ? `up` : `down`
                      }`}
                    />
                  </svg>
                </StyledWrapper>
                <StyledWrapper>
                  <p style={{ color: priceColor }}> {quote.change_percent}%</p>
                  <svg width={15} height={20}>
                    <use
                      style={{
                        fill: priceColor,
                      }}
                      href={`${sprite}#icon-arrow-${
                        quote.price > prevQuote?.price ? `up` : `down`
                      }`}
                    />
                  </svg>
                </StyledWrapper>
                <StyledWrapper>
                  <p style={{ color: priceColor }}>{quote.dividend}</p>
                  <svg width={15} height={20}>
                    <use
                      style={{
                        fill: priceColor,
                      }}
                      href={`${sprite}#icon-coins`}
                    />
                  </svg>
                </StyledWrapper>
                <StyledText>{quote.yield}$</StyledText>
                <StyledTimeWrapper>
                  <p>{new Date(quote.last_trade_time).toUTCString()}</p>
                  <svg width={20} height={20}>
                    <use href={`${sprite}#icon-clock`} />
                  </svg>
                </StyledTimeWrapper>
              </StyledItem>
            );
          })}
        </StyledList>
      )}
    </StyledListWrapper>
  );
};

export default TickerList;
