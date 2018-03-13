fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
        if (Array.isArray(collection) === true) {
          for (const element of collection){
            cb(element, collection)
          }
        } else {
          for (let key in collection){
            cb(key, collection[key], collection)
          }
        }
      return collection;
    },

    map: function(collection, cb) {
      let newArr = []

      if (Array.isArray(collection) === true) {
        for (const element of collection){
          let newVal = cb(element, collection)
          newArr.push(newVal)
        }
      } else {
        for (let key in collection){
          let newVal = cb(collection[key])
          newArr.push(newVal)
        }
      }
      // debugger;
    return newArr;
    },

    reduce: function(arr, cb, acc) {
      for (const element of arr) {
        acc = cb(acc, element, arr)
      }
      return acc
    },

    find: function(collection, predicate){
      for (const element of collection){
        if (predicate(element)) {
          return true
        }
      }
      return false
    },

    filter: function(collection, predicate){
      newArr = []
      for (const element of collection){
        if (predicate(element)) {
          newArr.push(element)
        }
      }
      return newArr
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n) {
      if (n === undefined) {
        return collection[0];
      } else {
        return collection.splice(0, n)
      }
    },

    last: function(collection, n) {
      if (n === undefined) {
        return collection[collection.length - 1];
      } else {
        return collection.slice(-n)
      }

    },

    compact: function(array) {
      let newArr = []
      for (const element of array){
        if (element) {
          newArr.push(element)
        }
      }
      return newArr
    },

    sortBy: function(array, cb) {
      let newArr = []
      for (const element of array) {
        // debugger;
        newArr.push(cb(element))
      }
      return newArr.sort(function (a, b) {
        return a - b
      })
    },

    flatten: function(arr, shallow = false, newArr = []) {
      if (shallow) {
        for (const element of arr) {
          if (Array.isArray(element)) {
            for (const e of element) {
              newArr.push(e)
            }
          } else {
            newArr.push(element)
          }
        }
      } else {
        for (const element of arr) {
          if (Array.isArray(element)) {
            // debugger;
            fi.flatten(element, false, newArr)
          } else {
            newArr.push(element)
          };
        };
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

      return newArr
    },

    keys: function(object) {
      let newArr = []
      for (const key in object) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(object) {
      let newArr = []
      for (const key in object) {
        newArr.push(object[key])
      }
      return newArr
    },

    functions: function(object) {
      let newArr = []
      for (const key in object)
        if (typeof(object[key]) === 'function') {
          newArr.push(key)
        }

        return newArr.sort()
    },

    giveMeMore: function(object) {
      return true
    }


  }
})()

fi.libraryMethod()
