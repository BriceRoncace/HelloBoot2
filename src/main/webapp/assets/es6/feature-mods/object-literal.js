import {out as log, title, lineSpacer} from './console-utils.js';

function objectLiteralExample() {
  const animal = "zebra";
  
  const color = 'red';
  const obj = {
    x: 5,
    y: 10,
    color, // define fields with variable assignment of the same name
    
    // inline functions to create methods
    
    toString() {
      return `X=${this.x}, Y=${this.y}, color='${this.color}'`;
    },
    sayHello() {
      return `Hello from ${this.toString()}; Animal is ${animal}`;
    },
    sayHello2: function() {
      return `Hello from ${this.toString()}; Animal is ${animal}`;
    },
    sayHello3: () => `Hello from ${this.toString()} ; Animal is ${animal}`,
    
    // dynamic (calculated) properties
    ['prop_' + 42]: 42,
    [animal]: 'Booyah!'
  };
  
  title('object literal');
  lineSpacer();
  
  log('console.log(obj);');
  log(obj);
  lineSpacer();
  
  log('console.log(obj.toString());');
  log(obj.toString());
  lineSpacer();
  
  
  log('console.log(obj.sayHello())');
  log(obj.sayHello());
  lineSpacer();
  
  log('console.log(obj.sayHello2())');
  log(obj.sayHello2());
  lineSpacer();
  
  log('console.log(obj.sayHello3())');
  log(obj.sayHello3());
  lineSpacer();
  
  log('console.log(obj.prop_42)');
  log(obj.prop_42);
  lineSpacer();
  
  log('console.log(obj.animal)');
  log(obj.animal);
  lineSpacer();
  
  log('console.log(obj.zebra)');
  log(obj.zebra);
  lineSpacer();
}

export {objectLiteralExample};