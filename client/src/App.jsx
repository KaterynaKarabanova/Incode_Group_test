import TickerList from "./TickerList/TickerList";
import { StyledListWrapper } from "./TickerList/TickerList.styled";

function App() {
  return (
    <StyledListWrapper>
      <h1>Price Changes</h1>
      <TickerList />
    </StyledListWrapper>
  );
}

export default App;
