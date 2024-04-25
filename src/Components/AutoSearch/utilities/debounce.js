const betterFunction = () => {
  let timer;
  return function (callback, delay, ...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.call(this, ...args);
    }, delay);
  };
};

const debounce = betterFunction();

export default debounce;
