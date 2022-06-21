export const customFetch = (time, task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(task);
    }, time);
  });
};

export const customFetchDetail = (time, task, productId) => {
  return new Promise((resolve) => {
    const product = task.find((elem) => elem.id === productId);
    setTimeout(() => {
      resolve(product);
    }, time);
  });
};

export const customFetchCategory = (time, task, category) => {
  return new Promise((resolve) => {
    const product = task.filter((elem) => elem.category === category);
    setTimeout(() => {
      resolve(product);
    }, time);
  });
};
