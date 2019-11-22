const fetchExample = () => {
  // Get user with id 2
  fetch('http://jsonplaceholder.typicode.com/users/2', {credentials: 'same-origin'})
  .then(response => response.json())
  .then(data => console.log(data))
  .then(undefinedArg => { console.log(undefinedArg); return 42; })
  .then(num => console.log(`Then chain gave us the number ${num}`));
}

export {fetchExample};