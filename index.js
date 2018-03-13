fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          iteratee(collection[i], i, collection);
        }
      } else if (typeof collection === 'object') {
        for (const item in collection){
          iteratee(collection[item], item, collection)
        }
      }
      return collection;
    },

    map: function(collection, iteratee) {
      let newCollection = []
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          newCollection.push(iteratee(collection[i]));
        }
        return newCollection;
      } else if (typeof collection === 'object') {
        for (const item in collection){
          newCollection.push(iteratee(collection[item], item));
        }
      }
      return newCollection;
    },

    reduce: function(collection, iteratee, acc) {

      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          acc = iteratee(acc, collection[i], collection)
        }
      } else if (typeof collection === 'object') {
        for (const item in collection){
          acc = iteratee(acc, item, collection)
        }
      }
      return acc;
    },

    find: function(collection, predicate){
      let f = false;
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          f = true;
          return f;
        }
      }
      return f;
    },

    filter: function(collection, predicate){
      let newArray = [];
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newArray.push(collection[i])
        }
      }
      return newArray;
    },

    size: function(collection){
      if(Array.isArray(collection)){
        return collection.length
      } else if (typeof collection === 'object') {
        return Object.keys(collection).length
      }
    },

    first: function(collection, n){
      if (n){return collection.slice(0,n)}
      else{return collection[0]}
    },

    last: function(collection, n){
      if (n){return collection.slice(-n)}
      else{return collection[collection.length - 1]}
    },

    compact: function(collection){
      let newArray = [];
      for(let i = 0; i < collection.length; i++){
        if (collection[i]){
          newArray.push(collection[i])
        }
      }
      return newArray;
    },

    sortBy: function(array, iteratee){
      var mapped = array.map(function(el, i) {
        return {index: i, value: iteratee(el)}
      })
      mapped.sort(function(a, b) {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        return 0;
      });
      var result = mapped.map(function(el){
        return array[el.index];
      });
      return result;
    },


    flatten: function(array, shallow, newArr=[]){
      // let flt = false;
      if (shallow){
        console.log('hello')
        for (let i = 0; i < array.length; i++){
          if (Array.isArray(array[i])){
            for (const item of array[i]){
             newArr.push(item)
           }
          } else {
            newArr.push(array[i]);
          }
        }
      } else {
        for (let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
          newArr = newArr.concat(fi.flatten(array[i]));
        } else {
          newArr.push(array[i]);
        }
      }
    }

      return newArr;
    },

    uniq: function(array, isSorted, iteratee){
      let newArray = [];
      if (iteratee){
        let newNewArray = [];
        for(let i = 0; i < array.length; i++){
          if (!newNewArray.includes(iteratee(array[i]))){
            newNewArray.push(iteratee(array[i]))
            newArray.push(array[i])
          }
        }
      } else{
        for(let i = 0; i < array.length; i++){
          if (!newArray.includes(array[i])){
            newArray.push(array[i])
          }
        }
      }
      return newArray;
    },

    keys: function(collection){
      let newArray = []
      for(let key in collection){
        newArray.push(key)
      }
      return newArray
    },

    values: function(collection){
      let newArray = []
      for(let key in collection){
        newArray.push(collection[key])
      }
      return newArray
    },

    functions: function(collection) {
      return Object.getOwnPropertyNames(collection).filter(function(property) {
       return typeof collection[property] == 'function';
   });
    },


  }
})()

fi.libraryMethod()
