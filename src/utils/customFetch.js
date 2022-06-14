export const customFetch = (time, task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(task);
    }, time);
  });
};

export const customFetchDetail = (time, task) => {
  return new Promise((resolve) => {
    const product = task.find((elem) => elem.id === 3);
    setTimeout(() => {
      resolve(product);
    }, time);
  });
};
