fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++)
        iteratee(newCollection[idx])

      return collection
    },


    map: function(input, cb) {
      let newArray = [];
      if (input[0] !== undefined) {
        input.forEach(function(element) {
          newArray.push(cb(element))
        })
      } else {
        for (let key in input) {
          newArray.push(cb(input[key]))
        }
      }
      return newArray
    },

    reduce: function(array, cb, acc) {
      for (let element in array) {
        acc = cb(acc, array[element], array)
      }
      return acc
    },

    find: function(array, predicate) {
      for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
          return true
          break;
        }
      }
      return false
    },


    filter: function(array, predicate) {
      let found = []
      for (let element of array) {
        if (predicate(element)) {
          found.push(element)
        }
      }
      return found
    },

    size: function(collection) {
      let counter = 0
      for (let element in collection) {
        counter++
      }
      return counter
    },

    first: function(array, n) {
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return n ? array.slice(-n) : array[array.length - 1]
    },

    compact: function(array) {
      let newArray = []
      for (let element of array) {
        if (!!element) {
          newArray.push(element)
        }
      }
      return newArray
    },

    sortBy: function(array, cb) {
      let newArray = []
      for (const element of array) {
        newArray.push(cb(element))
      }

      return newArray.sort(function(a, b) {
        return a - b
      })
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

    uniq: function(array, isSorted, iteratee) {
      let newArray = []
      if (isSorted) {
        for (let element of array) {
          if (!newArray.includes(element)) {
            if (element >= newArray.slice(-1)) {
              newArray.push(element)
            } else {
              break;
            }
          }
        }
      } else if (iteratee) {
        let values = []
        for (let element of array) {
          if (!values.includes(iteratee(element))) {
            values.push(iteratee(element));
            newArray.push(element);
          }
        }
      } else {
        for (let element of array) {
          if (!newArray.includes(element)) {
            newArray.push(element)
          }
        }
      }
      array = newArray
      return array
    },

    keys: function(obj) {
  // Using for loop
  const keys = []
  for (let key in obj){
    keys.push(key)
  }
  return keys
},

values: function(obj) {
  // Using for loop
  const values = []
  for (let key in obj){
    values.push(obj[key])
  }
  return values

  // Using the custom 'map' method from above
  // return this.map(obj, (value) => value)

},


functions: function(obj) {
  const functionNames = []

  for (let key in obj) {
    if (typeof obj[key] === "function"){
      functionNames.push(key)
    }
  }

  return functionNames.sort()
},

}
})()

fi.libraryMethod()
