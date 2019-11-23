import * as log from './console-utils.js';

const randomNumberBetween = (x, y) => Math.floor(Math.random() * y) + x;

function asyncPromiseFunction() {
  return new Promise((resolve, reject) => 
    setTimeout(timeoutFn(resolve, reject), randomNumberBetween(250, 5000))
  );
}

function asyncPromiseFunction2(count) {
  return new Promise((resolve, reject) => 
    setTimeout(() => resolve('asyncPromiseFunction2 returning success for count ' + count), 500)
  );
}

function asyncCallbackFunction(successCallback, errorCallback) {
  setTimeout(timeoutFn(successCallback, errorCallback), randomNumberBetween(250, 5000));
}

function asyncCallbackFunction2(count, successCallback) {
  setTimeout(function() {
    successCallback('asyncCallbackFunction2 returning success for count: ' + count);
  }, 500);
}

function timeoutFn(resolve, reject = () => {}) {
  return () => {
    const result = Math.random();
    return result > 0.5 ? resolve(result) : reject('Cannot Calculate!');
  };
}

function callbackHellExample() {
  log.title('callback hell');
  log.out('Calling an async function taking callback functions 10 times:');
  
  let counter = 0;
  Array(10).fill().forEach(async (item, i) => {
    log.out(`iteration index ${i}; invoking asyncCallbackFunction`);
    asyncCallbackFunction(
      r => {
        log.out(`[Counter ${counter}] Success: ${r}`);
        asyncCallbackFunction2(counter, (msg) => {
          log.out(msg);
        });
        counter += 1;
      },
      r => log.out(`[Counter ${counter++}] Failure: ${r}`)
    );
  });
}

const promiseExample = () => {
  log.title('promise');
  log.out('Calling an async Promise returning function 10 times:');
  
  let counter = 0;
  Array(10).fill().forEach((item, i) => {
    console.log(`iteration index ${i}; invoking asyncPromiseFunction`);
    asyncPromiseFunction()
      .then(r => {
        console.log(`[Counter ${counter}] Success: ${r}`);
        const p = asyncPromiseFunction2(counter);
        counter += 1;
        return p;
      })
      .then(msg => console.log(msg))
      .catch(r => console.log(`[Counter ${counter++}] Failure: ${r}`));
  });
  log.lineSpacer();
};

function asyncAwaitExample() {
  log.title('async/await');
  log.out('Async and await making working with Promises even nicer (thank you ES2017!)');
  log.out('Calling an async Promise returning function 10 times:');
  
  let counter = 0;
  Array(10).fill().forEach(async (item, i) => {
    console.log(`iteration index ${i}; invoking asyncPromiseFunction`);
    try {
      const result = await asyncPromiseFunction();
      console.log(`[Counter ${counter}] Success: ${result}`);
      const msg = await asyncPromiseFunction2(counter++);
      console.log(msg);
    }
    catch (error) {
      console.log(`[Counter ${counter++}] Failure: ${error}`);
    }
  });
  log.lineSpacer();
};

// see https://stackoverflow.com/a/46706452/225217 ; Don't like this "mix" but it's possible
function asyncAwaitExample2() {
  log.title('async/await');
  log.out('Async and await making working with Promises even nicer (thank you ES2017!)');
  log.out('Calling an async Promise returning function 10 times:');
  
  let counter = 0;
  Array(10).fill().forEach(async (item, i) => {
    console.log(`iteration index ${i}; invoking asyncPromiseFunction`);
    const result = await asyncPromiseFunction().catch(r => console.log(`[Counter ${counter++}] Failure: ${r}`));
    if (result) {
      console.log(`[Counter ${counter}] Success: ${result}`);
      const msg = await asyncPromiseFunction2(counter++);
      console.log(msg);
    }
  });
  log.lineSpacer();
};

export {
  promiseExample, 
  asyncAwaitExample, 
  asyncAwaitExample2, 
  callbackHellExample
};