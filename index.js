fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(iterable, cb) {
      if ( Array.isArray(iterable) ) {
        for (let i = 0; i < iterable.length; i++) {
          cb(iterable[i], i, iterable);
        }
      } else if (typeof iterable === 'object') {
        for (key in iterable) {
          cb(iterable[key], key, iterable);
        }
      }
      return iterable;
    },

    map: function(iterable, cb) {
      newArray = [];

      if ( Array.isArray(iterable) ) {
        for (let i = 0; i < iterable.length; i++) {
          newArray.push(cb(iterable[i], i, iterable));
        }
      } else if (typeof iterable === 'object') {
        for (key in iterable) {
          newArray.push(cb(iterable[key], key, iterable));
        }
      }
      return newArray;
    },

    reduce: function(collection, cb, acc) {
      // let counter = acc;
      for (element in collection) {
        acc = (cb(acc, collection[element], collection))
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (element of collection) {
        if (predicate(element) === true) {
          return true;
        }
      }
      return false;
    },

    filter: function(collection, predicate) {
      newArr = [];

      for (element of collection) {
        if (predicate(element) === true) {
          newArr.push(element);
        }
      }
      return newArr;
    },



    size: function(collection) {
      counter = 0;
      for (element in collection) {
        counter += 1;
      }
      return counter;
    },

    first: function(arr, num) {
      if (num === undefined) {
        return arr[0]
      } else {
        return arr.slice(0, num);
      }
    },

    last: function(arr, num) {
      if (num === undefined) {
        return arr[arr.length-1];
      } else {
        return arr.slice(-num);
      }
    },

    compact: function(arr) {
      let newArr = [];
      for (element of arr) {
        if (Boolean(element) === true) {
          newArr.push(element)
        }
      }
      return newArr;
    },

    iSortLast: function(arr) {
     let currIdx = arr.length-1
     while(currIdx > 0 && arr[currIdx-1] > arr[currIdx]) {
       const temp = arr[currIdx-1]
       arr[currIdx-1] = arr[currIdx]
       arr[currIdx] = temp
       currIdx--
     }
   },

   sortBy: function(collection, callback) {
     const newArr = []
     for (let val of collection) {
       newArr.push(callback(val))
       this.iSortLast(newArr)
     }
     return newArr
   },

    // sortBy: function(arr, cb) {
    //   let newArr = [...arr];
    //   // let newArr = [];
    //   // for (element in arr) {
    //   //   newArr.push(cb(element));
    //   // };
    //   const returnArr = newArr.sort(function(a, b) {
    //     if (typeof a === 'number') {
    //       return cb(a) - cb(b);
    //     } else {
    //       return cb(a).localeCompare(cb(b));
    //     }
    //   });
    //   console.log(arr)
    //   return returnArr;
    // },

    // flatten: function(arr, boolean) {
    //   // const newArr = [];

    //   if (Array.isArray(arr) === false) {
    //     newArr.push(arr);
    //     console.log(arr);
    //   } else if (Array.isArray(arr) === true) {
    //     for (element of arr) {
    //       return fi.flatten(element);
    //     }
    //   }

    //   // return newArr;
    // },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
     if (!Array.isArray(collection)) return newArr.push(collection)
     if (shallow) {
       for (let val of collection)
         Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
     } else {
       for (let val of collection) {
         this.flatten(val, false, newArr)
       }
     }
     return newArr
   },
    //
    // uniq: function(arr, sortedBoolean, cb) {
    //   let newArr = [];
    //   let newObj = {};
    //
    //   if (sortedBoolean === undefined && cb === undefined) {
    //     for (element of arr) {
    //       if (!newArr.includes(element)) {
    //         newArr.push(element);
    //       }
    //     }
    //     return newArr;
    //   } else {
    //     for (element of arr) {
    //       if (Object.values(newObj).includes(cb(element))) {
    //         continue;
    //       }
    //       else {
    //         newObj[element] = cb(element);
    //       }
    //     }
    //     return Object.keys(newObj);
    //   }
    // },

    uniqSorted: function(collection, iteratee) {
     const sorted = [collection[0]]
     for (let idx = 1; idx < collection.length; idx++) {
       if (sorted[idx-1] !== collection[idx])
         sorted.push(collection[idx])
     }
     return sorted
   },

   uniq: function(collection, sorted=false, iteratee=false) {
     if (sorted) {
       return fi.uniqSorted(collection, iteratee)
     } else if (!iteratee) {
       return Array.from(new Set(collection))
     } else {
       const modifiedVals = new Set()
       const uniqVals = new Set()
       for (let val of collection) {
         const moddedVal = iteratee(val)
         if (!modifiedVals.has(moddedVal)) {
           modifiedVals.add(moddedVal)
           uniqVals.add(val)
         }
       }
       return Array.from(uniqVals)
     }
   },

    keys: function(obj) {
      let newArr = [];
      for (key in obj) {
        newArr.push(key);
      }
      return newArr;
    },

    values: function(obj) {
      let newArr = [];
      for (key in obj) {
        newArr.push(obj[key]);
      }
      return newArr;
    },

    functions: function(obj) {
      let newArr = [];
      for (key in obj) {
        if (typeof obj[key] === 'function') {
          newArr.push(key);
        }
      }
      return newArr;
    },

    



  }

})()

fi.libraryMethod()
