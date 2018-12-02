const loggingMiddleware = ({ getState, dispatch }) => next => action => {
  const beforeState = getState();
  next(action);
  const afterState = getState();

  console.group("state logger");
  console.log(
    "%c state upon reaching middleware ðŸ‘‰ ",
    "background:purple;color:white",
    beforeState
  );
  console.log(
    "%c current state of the app ðŸ‘‰ ",
    "background:yellow;color:black",
    afterState
  );
  console.groupEnd("state logger");
};

export default loggingMiddleware;
