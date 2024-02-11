export const setTicker = (array) => {
  return {
    type: "ticker/set",
    payload: array,
  };
};

export const setPrevData = (array) => {
  return {
    type: "prevData/set",
    payload: array,
  };
};

export const setIsLoading = (value) => {
  return {
    type: "isLoading/set",
    payload: value,
  };
};
