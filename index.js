fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      if (Array.isArray(collection)) {
        collection.forEach (function(element, index, collection) {
          iteratee(element, index, collection)
        })
      } else {
        for (let key in collection) {
          iteratee(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, iteratee) {
      let result = [];
      if(Array.isArray(collection)){
        collection.forEach(function(element, index, collection){
          result.push(iteratee(element, index, collection))
        })
      }else{
        for(let key in collection){
          result.push(iteratee(collection[key], key, collection))
        }
      }
      return result
    },

    reduce: function(collection, iteratee, acc) {
      let result = acc;
      for (let key in collection) {
        result = iteratee(result, collection[key], collection)
      }
      return result;
    },

    find: function(collection, predicate) {
      if (Array.isArray(collection)) {
        for (let element of collection) {
          if (predicate(element)) {
            return true
            // should return element
          }
        }
      } else {
        for (let key in collection) {
          if (predicate(collection[key])) {
            return true
            // should return collection[key]
          }
        }
      }
      return false
      //should return undefined
    },

    filter: function(collection, predicate) {
      let result = []
      collection.forEach (function(element) {
        if (predicate(element)) {
          result.push(element)
        }
      })
      return result
    },

    size: function(collection) {
      let counter = 0
      if (Array.isArray(collection)) {
        for (let element of collection) {
          counter++
        }
      } else {
        for (let key in collection) {
          counter++
        }
      }
      return counter
    },

    first: function(array, n = 1) {
      result = []
      if (n === 1) {
        return array[0]
      } else {
        for (let i = 0; i < n; i++) {
          result.push(array[i])
        }
      }
      return result
    },

    last: function(array, n = 1) {
      result = []
      if (n === 1) {
        return array[array.length - 1]
      } else {
        while (n > 0) {
          result.push(array[array.length - n])
          n--
        }
      }
      return result
    },

    compact: function(array) {
      let result = []
      for (let element of array) {
        if (element) {
          result.push(element)
        }
      }
      return result
    },

    sortBy: function(array, iteratee) {
      let newArr = [...array]
      let result = []
      newArr.sort(function(a, b) {
        return iteratee(a) - iteratee(b)
      })
      for (let element of newArr) {
        result.push(iteratee(element))
      }
      return result
    },

    flatten: function(array, shallow = false) {
      let result = []
      if (!shallow) {
        for (let i = 0; i < array.length; i++) {
          if (!Array.isArray(array[i])) {
            result.push(array[i])
          } else {
            result = result.concat(fi.flatten(array[i]))
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (!Array.isArray(array[i])) {
            result.push(array[i])
          } else {
            for (let j = 0; j < array[i].length; j++) {
              result.push(array[i][j])
            }
          }
        }
      }
      return result
    },

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


    keys: function(object) {
      let result = []
      for (let key in object) {
        result.push(key)
      }
      return result
    },

    values: function(object) {
      let result = []
      for (let key in object) {
        result.push(object[key])
      }
      return result
    },

    functions: function(object) {
      let result = []
      let temp = fi.keys(object).sort();
      for(let element of temp) {
        if (typeof object[element] === 'function') {
          result.push(element)
        }
      }
      return result.sort()
    },

  }
})()

fi.libraryMethod()
