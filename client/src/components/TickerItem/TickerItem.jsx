import {
  StyledItem,
  StyledText,
  StyledTicker,
  StyledTimeWrapper,
  StyledWrapper,
} from "./TickerItem.styled";
import SvgItem from "../SvgItem/SvgItem";

const TickerItem = ({ quote, priceColor }) => {
  return (
    <StyledItem>
      <StyledTicker>{quote.ticker}</StyledTicker>
      <StyledText>{quote.price}$</StyledText>
      <StyledWrapper>
        <p style={{ color: priceColor }}>{quote.change}</p>
        <SvgItem
          color={priceColor}
          address={`arrow-${priceColor === "green" ? `up` : `down`}`}
        />
      </StyledWrapper>
      <StyledWrapper>
        <p style={{ color: priceColor }}> {quote.change_percent}%</p>
        <SvgItem
          color={priceColor}
          address={`arrow-${priceColor === "green" ? `up` : `down`}`}
        />
      </StyledWrapper>
      <StyledWrapper>
        <p style={{ color: priceColor }}>{quote.dividend}</p>
        <SvgItem color={priceColor} address={"coins"} />
      </StyledWrapper>
      <StyledText>{quote.yield}$</StyledText>
      <StyledTimeWrapper>
        <p>{new Date(quote.last_trade_time).toUTCString()}</p>
        <SvgItem color={"black"} address={"clock"} />
      </StyledTimeWrapper>
    </StyledItem>
  );
};
export default TickerItem;
