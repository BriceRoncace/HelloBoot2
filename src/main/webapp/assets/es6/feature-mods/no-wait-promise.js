import * as log from './console-utils.js';

function noWaitPromiseFunction() {
  return new Promise((resolve, reject) => 
    resolve("resolving immediately!")
  );
}

const noWaitPromiseExample = () => {
  log.title('promise');
  log.out('Calling a (no-wait) Promise returning function 10 times:');
  
  let counter = 0;
  Array(10).fill().forEach((item, i) => {
    console.log(`iteration index ${i}; invoking promiseFunction`);
    noWaitPromiseFunction()
      .then(r => {
        console.log(`[Counter ${counter}] Success: ${r}`);
        counter++;
      });
  });
  log.lineSpacer();
};

export {
  noWaitPromiseExample
};