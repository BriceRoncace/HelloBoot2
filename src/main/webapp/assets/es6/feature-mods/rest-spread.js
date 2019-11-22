import * as log from './console-utils.js';

function restSpreadExample() {
  log.title("rest & spread operators");
  log.lineSpacer();
  
  spreadExample();
  mergeArrays();
  restExample();

  function spreadExample() {
    const array = ['red', 'blue', 'green'];
    const copyOfArray = [...array];
    
    log.out('use spread operator to shallow copy an array');
    console.log('Copy of', array, 'is', copyOfArray);
    console.log('Are array', array, 'and array', array, 'the same?', array === array);
    console.log('Are array', array, 'and copyOfArray', copyOfArray, 'the same?', array === copyOfArray);
    log.lineSpacer();
        
    const array2 = [{name:'Bob'}, {name:'Jim'}, {name:'Bo'}];
    const copyOfArray2 = [...array2];
    log.out('is it really a shallow copy?');
    log.out('array2[0].name = ' + array2[0].name);
    log.out('copyOfArray2[0].name = ' + copyOfArray2[0].name);
    log.out('Copy of', array2, 'is', copyOfArray2);
    log.out('Now modifying array2[0].name');
    array2[0].name='Bobby-bobby-bo-bah-bee';
    log.out('array2[0].name = ' + array2[0].name);
    log.out('copyOfArray2[0].name = ' + copyOfArray2[0].name);
    console.log('Copy of', array2, 'is', copyOfArray2);
    log.lineSpacer();
  }
  
  function mergeArrays() {
    const defaultColors = ['red', 'blue', 'green'];
    const userDefinedColors = ['yellow', 'orange'];
    let mergedColors = [...defaultColors, ...userDefinedColors];
    
    log.out('use spread operator merge arrays');
    log.out(`Merging [${defaultColors}] with [${userDefinedColors}]`);
    log.out('Merged colors:', mergedColors);
    log.lineSpacer();
    
    mergedColors = [defaultColors, userDefinedColors];
    log.out(`Merging (without spread operator) [${defaultColors}] with [${userDefinedColors}]`);
    log.out('Merged colors:', mergedColors);
    log.lineSpacer();
  }

  function restExample() {
    function printColors(first, second, third, ...theRest) {
      log.out(`Top three colors are ${first}, ${second}, ${third}. The rest are ${theRest}`);
    }
    log.out('use rest (as in the rest of the arguments) operator to collect remaining function arguments');
    log.out('calling function printColors(first, second, third, ...theRest)');
    log.out('printColors(\'yellow\', \'blue\', \'orange\', \'white\', \'black\');');
    printColors('yellow', 'blue', 'orange', 'white', 'black');
  }
}

export {restSpreadExample};