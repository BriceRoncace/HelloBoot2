function reduceExample() {
  const array = [1, 2, 3, 4];

  function sum(acc, value) {
    return acc + value;
  }

  function product(acc, value) {
    return acc * value;
  }

  let sumOfArrayElements = array.reduce(sum, 0);
  let productOfArrayElements = array.reduce(product, 1);

  console.log('Sum of', array, 'is', sumOfArrayElements);
  console.log('Product of', array, 'is', productOfArrayElements);
}

export {reduceExample};