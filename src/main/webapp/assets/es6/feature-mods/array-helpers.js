import * as log from './console-utils.js';

const colors = ['red', 'green', 'blue'];

const forEachExample = () => {
  log.title('forEach');
  log.out('Given the array: ', colors);
  log.lineSpacer();
  
  log.out('colors.forEach(c => console.log(c));');
  colors.forEach(c => console.log(c));
  log.lineSpacer();
  
  log.out('colors.forEach((c, i, arr) => console.log(c, i, arr));');
  colors.forEach((c, i, arr) => console.log(c, i, arr));
  log.lineSpacer();
  
  log.out('colors.forEach(console.log);');
  colors.forEach(console.log);
  log.lineSpacer();
};

const mapExample = () => {
  log.title('map');
  log.out('Given the array: ', colors);
  log.lineSpacer();
  
  log.out('console.log(colors.map(c => c.toUpperCase()));');
  log.out(colors.map(c => c.toUpperCase()));
  log.lineSpacer();
  
  log.out('console.log(colors.map(c => { return c.toUpperCase(); }));');
  log.out(colors.map(c => { return c.toUpperCase(); }));
  log.lineSpacer();
  
  log.out('console.log(colors.map(c => { c.toUpperCase(); }));');
  log.out(colors.map(c => { c.toUpperCase(); }));
  log.lineSpacer();
  
  log.out('console.log(colors.map((c, i, arr) => { log.out(c, i, arr); return c.toUpperCase(); }));');
  console.log(colors.map((c, i, arr) => { log.out(c, i, arr); return c.toUpperCase(); }));
  log.lineSpacer();
  
  
  // traditional function vs arrow function
  log.title('Aside to examine const vs. var (and function, arrow function)');

  function capitalize(val) {
    return val.toUpperCase();
  };
  
  const capitalize2 = function(val) {
    return val.toUpperCase();
  };
  
  const capitialize3 = (val) => {
    return val.toUpperCase();
  };
  
  var capitialize4 = (val) => {
    return val.toUpperCase();
  };
  
  const container = {};
  container.capitialize = (val) => val.toUpperCase();
  
  var container2 = {};
  container2.capitialize = (val) => val.toUpperCase();
  
  const container3 = {
    capitialize: (val) => val.toUpperCase()
  };
  
  const container4 = {
    capitialize: capitalize
  };

  log.tryIt(() => {
    log.out('Using traditional function');
    const capitalColors = colors.map(capitalize);
    log.out(capitalColors);
    log.lineSpacer();
  });
  
  log.tryIt(() => {
    log.out('Using traditional function assigned to constant');
    const capitalColors2 = colors.map(capitalize2);
    log.out(capitalColors2);
    log.lineSpacer();
  });
    
  log.tryIt(() => {
    log.out('Using arrow function assigned to constant');
    const capitalColors3 = colors.map(capitialize3);
    log.out(capitalColors3);
    log.lineSpacer();
  });

  log.tryIt(() => {
    log.out('Using arrow function assigned to var');
    const capitalColors4 = colors.map(capitialize4);
    log.out(capitalColors4);
    log.lineSpacer();
  });
  
  log.tryIt(() => {
    log.out('Using const container.capitialize');
    const capitalColors5 = colors.map(container.capitialize);
    log.out(capitalColors5);
    log.lineSpacer();
  });
  
  log.tryIt(() => {
    log.out('Using var container2.capitialize');
    const capitalColors6 = colors.map(container2.capitialize);
    log.out(capitalColors6);
    log.lineSpacer();
  });
  
  log.tryIt(() => {
    log.out('Using const container3.capitialize');
    const capitalColors7 = colors.map(container3.capitialize);
    log.out(capitalColors7);
    log.lineSpacer();
  });
  
  log.tryIt(() => {
    log.out('Using const container4.capitialize');
    const capitalColors8 = colors.map(container4.capitialize);
    log.out(capitalColors8);
    log.lineSpacer();
  });
 
};

const filterExample = () => {
  const values = [1, 60, 34, 30, 20, 5];
  
  log.title('filter');
  log.out('Given the array: ', values);
  log.lineSpacer();
  
  log.out('console.log(values.filter(v => v < 20));');
  log.out(values.filter(v => v < 20));
  log.lineSpacer();
  
  log.out('console.log(values.filter(v => v > 100));');
  log.out(values.filter(v => v > 100));
  log.lineSpacer();
  
  log.out('console.log(values.filter((v, i, arr) => log.out(i) || log.out(arr) || v === 30));');
  log.out(values.filter((v, i, arr) => log.out(i) || log.out(arr) || v === 30));
  log.lineSpacer();
  
  log.out('console.log(values.filter((v, ...args) => log.out(args) || log.out(...args) || v === 30));');
  log.out(values.filter((...args) => log.out(args) || log.out(...args) || args[0] === 30));
  log.lineSpacer();
};

const findExample = () => {
  const people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Bob', age: 78}, 
    {name: 'Elizabeth', age: 16}
  ];
  
  const teenager = (person) => person.age > 12 && person.age < 20;

  log.title('find');
  log.out('Given the array: ', people);
  log.out('and the function: const teenager = (person) => person.age > 12 && person.age < 20;');
  log.lineSpacer();

  log.out('console.log(people.find(tennager);');
  log.out(people.find(teenager));
  log.lineSpacer();
  
  log.out('console.log(people.find(p => p.age < 10);');
  log.out(people.find(p => p.age < 10));
  log.lineSpacer();
};

function everyExample() {
  
}



export {forEachExample, mapExample, filterExample, findExample}
