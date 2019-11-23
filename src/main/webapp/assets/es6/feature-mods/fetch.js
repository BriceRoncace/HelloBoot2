const fetchExample = () => {
  fetch('https://jsonplaceholder.typicode.com/users', {credentials:'same-origin'})
    .then(res => res.json())
    .then(data => {
      const user = data.find(u => u.username === 'Kamren');
      const id = user ? user.id : 1;
      return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {credentials:'same-origin'})
    })
    .then(res => res.json())
    .then(data => console.log(data));  
    //.then(undefinedArg => { console.log(undefinedArg); return 42; })      
    //.then(num => console.log(`Then chain gave us the number ${num}`));
};

export {fetchExample};