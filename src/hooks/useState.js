let currentState;
let firstFlag = true;
export const useState = function (initState) {
  if (firstFlag) {
    currentState = typeof initState === "function" ? initState() : initState;
    firstFlag = false;
  }
  const dispathState = (newState) => {
    currentState =
      typeof newState === "function" ? newState(currentState) : newState;
  };
  return [currentState, dispathState];
};
