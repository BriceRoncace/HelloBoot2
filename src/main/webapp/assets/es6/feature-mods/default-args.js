import * as log from './console-utils.js';

const invalidOrEmptyArray = (a) => !Array.isArray(a) || !a.length;
const isNumberArray = (a) => a.length > 0 && isNumber(a[0]);
const isString = (val) => typeof val === 'string' || val instanceof String;
const isNumber = (val) => typeof val === 'number' && isFinite(val);
const numeralAsc = (a,b) => a - b;
const numeralDesc = (a,b) => b - a;

function defaultArgExample() {
  function sort(array = [], direction = 'asc') {
    if (isNumberArray(array)) {
      return direction === 'asc' ? array.sort(numeralAsc) : array.sort(numeralDesc); 
    }
    return direction === 'asc' ? array.sort() : array.sort().reverse();
  }
  
  log.title('default arguments');
  log.out('function sort(array = [], direction = "asc") { ... }');
  log.lineSpacer();
    
  log.out('sort([3, 1, 4, 5, 2]);');
  log.out(sort([3, 1, 4, 5, 2]));
  log.lineSpacer();
  
  log.out('sort([3, 1, 4, 5, 2], "asc");');
  log.out(sort([3, 1, 4, 5, 2], 'asc'));
  log.lineSpacer();
  
  log.out('sort([3, 1, 4, 5, 2], "desc");');
  log.out(sort([3, 1, 4, 5, 2], 'desc'));
  log.lineSpacer();
  
  log.out('sort(["4", "7", "10", "1", "5"]);');
  log.out(sort(['4', '7', '10', '1', '5']));
  log.lineSpacer();
  
  log.out('sort(["4", "7", "10", "1", "5"], "asc");');
  log.out(sort(['4', '7', '10', '1', '5'], 'asc'));
  log.lineSpacer();
  
  log.out('sort(["4", "7", "10", "1", "5"], "desc");');
  log.out(sort(['4', '7', '10', '1', '5'], 'desc'));
  log.lineSpacer();
  
  
  log.out('sort(["B", "F", "W", "C", "A"]);');
  log.out(sort(['B', 'F', 'W', 'C', 'A']));
  log.lineSpacer();
  
  log.out('sort(["B", "F", "W", "C", "A"], "asc");');
  log.out(sort(['B', 'F', 'W', 'C', 'A'], 'asc'));
  log.lineSpacer();
  
  log.out('sort(["B", "F", "W", "C", "A"], "desc");');
  log.out(sort(['B', 'F', 'W', 'C', 'A'], 'desc'));
  log.lineSpacer();
  
  log.out('sort();');
  log.out(sort());
  log.lineSpacer();
  
  log.out('sort(undefined);');
  log.out(sort(undefined));
  log.lineSpacer();
  
  log.out('sort(null);');
  log.out(sort(null));
  log.lineSpacer();
}

export {defaultArgExample};
