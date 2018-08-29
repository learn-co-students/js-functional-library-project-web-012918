fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(collection, iteratee) {
      if (Array.isArray(collection)) {
        for(let el of collection) {
          iteratee(el)
        }
      } else {
        for(let key in collection) {
          iteratee(collection[key])
        }
      }
      return collection
    },
    map: function(collection, iteratee) {
      let arr = []
      if(Array.isArray(collection)) {
        for(let el of collection) {
          arr.push(iteratee(el))
          }
        } else {
          for(let key in collection) {
            arr.push(iteratee(collection[key]));
          }
      }
      return arr;
    },
    reduce: function(collection, iteratee, acc) {
      for(let i = 0; i < collection.length; i++) {
        acc = iteratee(acc, collection[i], collection)
      }
      return acc;
    },
    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) {
          return true;
        }
      }
      return false;
    },
    filter: function(collection, predicate) {
      let arr = [];
      for (let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) {
           arr.push(collection[i])
        }
      }
      return arr;
    },
    size: function(collection) {
      let counter = 0;
      if (Array.isArray(collection)) {
        for (let el of collection) {
          counter++;
        }
      } else {
        for(let key in collection) {
          counter++
        }
      }
      return counter;
    },
    first: function(array, n) {
      return (n) ? array.slice(0, n) : array[0];
    },
    last: function(array, n) {
      return (n) ? array.slice(-n) : array[array.length - 1];
    },
    compact: function(array) {
      let truthy = []
      for (let el of array) {
        if (el) {
          truthy.push(el);
        }
      }
    return truthy;
    },
    sortBy: function(array, iteratee) {
      let arr = []
      let sorted = array.slice().sort(function (a, b) {
        return (iteratee(a) - iteratee(b))
      });
      for(let el of sorted) {
        arr.push(iteratee(el));
      }
      return arr;
    },
    flatten: function flatten(array, shallow) {
      let arr = [];
      if (shallow){
       for (const el of array) {
         if (Array.isArray(el)) {
           for (const em of el) {
             arr.push(em);
           }
         } else {
           arr.push(el);
         }
       }
       return arr
     }else{
        for (let el of array) {
          if (Array.isArray(el)) {
            arr = arr.concat(flatten(el));
          } else {
            arr.push(el)
          }
        }
      }
        return arr;
    },
    uniq: function(array, isSorted, iteratee) {
       //array = [1,2,2,3,4,6,9]
       let array2 = [] //[1,2,2,0,1,0,0]
       let arr = []
       let itarr = []
       //
       if (iteratee){
         for(let el of array){
           array2.push(iteratee(el))
         }
         for(let i=0; i< array2.length; i++){
           let el = array[i]
           let itel = array2[i]
           if(!itarr.includes(itel)){
             arr.push(el)
             itarr.push(itel)
           }
         }
       }else{
         for(let i=0; i< array.length; i++){
           let el = array[i]
           if(!arr.includes(el)){
             arr.push(el)
           }
         }
       }
       return arr
    },
    keys: function(object) {
      let arr = []
      for(let key in object) {
        arr.push(key);
      }
      return arr;
    },
    values: function(object) {
      let arr = []
      for(let key in object) {
        arr.push(object[key]);
      }
      return arr;
    },
    functions: function(object) {
      var arr = [];
      for(let key in object) {
        if(typeof object[key] === 'function') {
          arr.push(object[key]);
        }
      }
      return arr;
    },
  }
})()
fi.libraryMethod()
