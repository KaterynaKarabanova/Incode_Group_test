const getPriceColor = (currentPrice, prevPrice) => {
  if (currentPrice > prevPrice) {
    return "green";
  } else if (currentPrice < prevPrice) {
    return "red";
  } else {
    return "black";
  }
};

export default getPriceColor;
