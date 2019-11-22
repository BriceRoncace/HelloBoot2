function defaultArgExample() {

  function sort(array = [], direction='asc') {
    console.log('Sorting array', array, direction);
  }

  sort([1, 2, 3]);
  sort([1, 2, 3], 'descending');
}

export {defaultArgExample};
