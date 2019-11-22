const promiseExample = () => {

  function asyncFunc() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = Math.random();
        result > 0.5 ? resolve(result) : reject('Cannot calculate...')
      }, 500)
    });
  }

  // for (let i=0; i < 10; i++) {
  //   asyncFunc()
  //   .then(r => console.log(`Success: ${r}`))
  //   .catch(r => console.log(`Failure: ${r}`));
  // }

  Array(10).fill().forEach((item, index) => {
    console.log(index);
    asyncFunc()
    .then(r => console.log(`Success: ${r}`))
    .catch(r => console.log(`Failure: ${r}`));
  });
}

export {promiseExample};