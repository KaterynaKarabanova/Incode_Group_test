import TickerList from "./components/TickerList/TickerList";
import { StyledListWrapper } from "./components/TickerList/TickerList.styled";

function App() {
  return (
    <StyledListWrapper>
      <h1>Price Changes</h1>
      <TickerList />
    </StyledListWrapper>
  );
}

export default App;
