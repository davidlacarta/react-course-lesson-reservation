const sleep = (ms = Math.random() * 3000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export {sleep};
