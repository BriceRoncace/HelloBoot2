// See 
// https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html
// https://stackoverflow.com/q/41085189/225217

import * as log from './console-utils.js';

const arrowFunctionExample = () => {
  const test = {
    name: 'test object',
    createAnonFunction: function() {
      return log.tryIt(function() {
        log.out(arguments);
        log.out(this);
        log.out(this.name);
      });
    },

    createArrowFunction: function() {
      return log.tryIt(() => {
        console.log(arguments);
        console.log(this);
        console.log(this.name);
      });
    }
  };
  
  test.createAnonFunction('hello', 'world');
  test.createArrowFunction('hello', 'world');
};

export {arrowFunctionExample}