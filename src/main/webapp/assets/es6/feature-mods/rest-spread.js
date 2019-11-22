function restSpreadExample() {

  function spreadExample() {
    let array = ['red', 'blue', 'green'];
    let copyOfArray = [...array];
    
    console.log('Copy of', array, 'is', copyOfArray);
    console.log('Are', array, 'and', copyOfArray, 'same?', array === copyOfArray);
  }

  function mergeArrays() {
    let defaultColors = ['red', 'blue', 'green'];
    let userDefinedColors = ['yellow', 'orange'];
    let mergedColors = [...defaultColors, ...userDefinedColors];

    console.log(`Merging [${defaultColors}] with [${userDefinedColors}]`);
    console.log('Merged colors', mergedColors)
  }

  function restExample() {
    function printColors(first, second, third, ...others) {
      console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others);
    }
    printColors('yellow', 'blue', 'orange', 'white', 'black');
  }

  spreadExample();
  mergeArrays();
  restExample();
}

export {restSpreadExample};