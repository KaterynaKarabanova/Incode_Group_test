import { styled } from "styled-components";
export const StyledTicker = styled.p`
  width: 50px;
  height: 20px;
  font-weight: 500;
  color: chocolate;
`;

export const StyledItem = styled.li`
  font-size: 20px;
  font-weight: 600;
  height: 60px;
  display: flex;
  gap: 30px;
`;

export const StyledText = styled.p`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTimeWrapper = styled(StyledWrapper)`
  width: 330px;
`;
