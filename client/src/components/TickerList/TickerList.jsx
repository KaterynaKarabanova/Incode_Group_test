import React, { useEffect } from "react";
import io from "socket.io-client";
import { StyledList, StyledListWrapper } from "./TickerList.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoading,
  getPrevData,
  getTickerData,
} from "../../redux/selectors";
import { setIsLoading, setPrevData, setTicker } from "../../redux/actions";
import TickerItem from "../TickerItem/TickerItem";
import getPriceColor from "../../helpers/getPriceColor";
const socket = io("http://localhost:4000");

const TickerList = () => {
  const dispatch = useDispatch();

  const tickerData = useSelector(getTickerData);
  const prevData = useSelector(getPrevData);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      dispatch(setPrevData(data));
    }
  }, [dispatch]);

  useEffect(() => {
    socket.on("ticker", (quotes) => {
      localStorage.setItem("data", JSON.stringify(quotes));
      dispatch(setTicker(quotes));
      dispatch(setIsLoading(false));
    });

    socket.emit("start");

    return () => {
      socket.disconnect();
    };
  }, []);

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
              <TickerItem key={index} quote={quote} priceColor={priceColor} />
            );
          })}
        </StyledList>
      )}
    </StyledListWrapper>
  );
};

export default TickerList;
