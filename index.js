fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const value in collection){
        callback(collection[value], value, collection);
      }
      return collection;
    },


    map: function(arr, callback) {
      const newArray = [];
      for(const element of arr){
        newArray.push(callback(element));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      for(const val of collection){
        acc = callback(acc, val, collection);
        console.log(acc)
      }
      return acc;
    },

    find: function(arr, predicate) {
      let i = 0;
      while(i < arr.length){
        if (predicate(arr[i])) { return arr[i]; }
        i++;
      }
    },

    filter: function(arr, predicate) {
      let i = 0;
      const newArr = [];
      while(i < arr.length){
        if (predicate(arr[i])) { newArr.push(arr[i]); }
        i++;
      }
      return newArr;
    },

    size: function(collection) {
      let i = 0;
      for(const key in collection){
        i++;
      }
      return i;
    },

    first: function(arr, n) {
      if (n) {
        return arr.slice(0,n);
      } else {
        return arr.slice(0,1);
      }
    },

    last: function(arr, n) {
      if (n) {
        return arr.slice(-n);
      } else {
        return arr.slice(arr.length-1)
      }
    },

    compact: function(arr) {
      let i = 0;
      const newArr = [];
      while(i < arr.length){
        if (!!(arr[i])) { newArr.push(arr[i]); }
        i++;
      }
      return newArr;
    },

    sortBy: function(collection, callback) {
      const newArr = collection.slice();
      if (typeof newArr[1] !== "object") {
        newArr.sort((a, b) => callback(a) - callback(b));
      } else {
        newArr.sort((a, b) => callback(a).localeCompare(callback(b)));
      }
      return newArr;
    },


  }
})()

fi.libraryMethod()
