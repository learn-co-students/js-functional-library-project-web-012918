fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (let key in collection) {
        iteratee(collection[key], key, collection);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      let newAr = [];
      for (let key in collection) {
        newAr.push(iteratee(collection[key], key, collection))
      }
      return newAr;
    },

    reduce: function(collection, iteratee, acc) {
      for (let key in collection) {
        acc = iteratee(acc, collection[key], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return true;
        }
      }
      return false;
    },

    filter: function(collection, predicate) {
      let newAr = [];
      for (let key in collection) {
        if (predicate(collection[key])) {
          newAr.push(collection[key])
        }
      }
      return newAr;
    },

    size: function(collection) {
      let size = 0;
      for (let key in collection) {
        size++
      }
      return size;
    },

    first: function(array, n=1) {
      if (n===1) {
        return array[0];
      } else {
        let counter = 0;
        let newAr = [];
        while (counter < n) {
          newAr.push(array[counter++])
        }
        return newAr;
      }
    },

    last: function(array, n=1) {
      if (n===1) {
        return array.slice(-1)[0];
      } else {
        let newAr = [];
        let counter = -1;
        while (counter >= (-n)) {
          newAr.unshift(array[array.length+counter])
          counter--
        }
        return newAr;
      }
    },

    compact: function(array) {
      let newArr = [];
      for(let value of array) {
        if(value) {
          newArr.push(value);
        }
      }
      return newArr;
    },

    sortBy: function(array, iteratee) {
      let newArr = [];
      let assortedArr = [];
      for(let key in array) {
        assortedArr.push(iteratee(array[key]));
      }
      let presortedArr = [...assortedArr];
      assortedArr.sort((a, b) => a - b);
      if(array.indexOf(assortedArr[0]) === -1) {
        return assortedArr;
      }
      for(let key in assortedArr) {
        newArr.push(array[presortedArr.indexOf(assortedArr[key])]);
      }
      return newArr;
    },

    flatten: function(array, shallow=false) {
      let newArr = [];
      for(let value of array) {
        if(!shallow) {
          if(Array.isArray(value)) {
            newArr = newArr.concat(fi.flatten(value));
          } else {
            newArr.push(value);
          }
        } else {
          if(Array.isArray(value)) {
            for(let arrValue of value) {
              newArr.push(arrValue);
            }
          } else {
            newArr.push(value);
          }
        }
      }

      return newArr;
    },

    uniq: function(array, isSorted=false, iteratee) {
      let newArr=[];
      if (iteratee===undefined) {
        for (let value of array) {
          if (newArr.indexOf(value) === -1) {
            newArr.push(value)
          }
        }
      } else {
        let iterativevalues=[];
        for (let value of array) {
          let newval = iteratee(value);
          if (iterativevalues.indexOf(newval) === -1){
            iterativevalues.push(newval);
            newArr.push(value);
          }
        }
      }

      return newArr;
    },

    keys: function(object) {
      let newAr=[];
      for (let key in object) {
        newAr.push(key)
      }
      return newAr;
    },

    values: function(object) {
      let newAr=[];
      for (let key in object) {
        newAr.push(object[key])
      }
      return newAr;
    },

    functions: function(object) {
      let newAr=[];
      for (let key in object) {
        if (typeof(object[key]) === "function"){
          newAr.push(key)
        }
      }

      return newAr.sort();
    },
  }
})()

fi.libraryMethod()
