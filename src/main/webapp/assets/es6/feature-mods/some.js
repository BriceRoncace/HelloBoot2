function someExample() {
  const people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ];

  const teenager = (person) => person.age > 10 && person.age < 20;
  const isAnyoneTeenager  = people.some(teenager);
  console.log("isAnyoneTeenager: " + isAnyoneTeenager);
}

export {someExample}