const destructuringExample = () => {

  function destructoringArray() {
    function printFirstAndSecondElement([first, second]) {
      console.log('First element is ' + first + ', second is ' + second);
    }

    function printSecondAndFourthElement([, second, , fourth]) {
      console.log('Second element is ' + second + ', fourth is ' + fourth);
    }

    var array = [1, 2, 3, 4, 5];

    console.log("Consider array", array);
    printFirstAndSecondElement(array);
    printSecondAndFourthElement(array);
  }

  function destructoringObject() {
    function printBasicInfo({firstName, secondName, profession}) {
      console.log(`Name and profession: ${firstName} ${secondName} - ${profession}`);
    }
    
    const person = {
      firstName: 'John',
      secondName: 'Smith',
      age: 33,
      children: 3,
      profession: 'teacher'
    }
    
    console.log('Consider person object', person);
    printBasicInfo(person);
  }

  destructoringArray();
  destructoringObject();

}

export {destructuringExample};