const out = (...args) => {
  // args is an Array; passing the array as parameters:
  console.log(...args);
};

const error = (...args) => {
  console.error(...args);
};

const tryIt = (arg) => {
  try {
    if (typeof arg === "function") {
        arg();
    }
    else {
      out(arg);
    }
  }
  catch (e) {
    error(e);
  }
};

const line = () => {
  out('-------------------------------------------------------------------------------------------------');
};

const lineSpacer = () => {
  line();
  out();
};

const title = (title) => {
  out(`================ ${title} ========================================================================`);
};

export {out, error, tryIt, line, lineSpacer, title}
