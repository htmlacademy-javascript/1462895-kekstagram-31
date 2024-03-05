const getRandomInt = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));

  if (lower > upper) {
    throw new Error(`getRandomInt: 'No integer numbers bethween ${min} and ${max}'`);
  }

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

const createRandomUniсIntGenerator = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const usedNumbers = [];

  return () => {
    if (usedNumbers.length > (upper - lower)) {
      throw new Error(`getRandomUniсIntGenerator: 'All integer numbers bethween ${min} and ${max} have been used'`);
    }

    let randomInteger = getRandomInt(min, max);

    while (usedNumbers.includes(randomInteger)) {
      randomInteger = getRandomInt(min, max);
    }

    usedNumbers.push(randomInteger);

    return randomInteger;
  };
};

export { getRandomInt, getRandomArrayElement, createRandomUniсIntGenerator };
