import { styled } from "styled-components";
import { StyledWrapper } from "../TickerItem/TickerItem.styled";

export const StyledList = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledListWrapper = styled(StyledWrapper)`
  display: block;
  width: 1200px;
  margin: 0 auto;
`;
