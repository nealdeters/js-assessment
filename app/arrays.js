exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let idx = -1;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item){
        idx = i;
        break;
      }
    }

    return idx;
  },

  sum: function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
    let filtered = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== item){
        filtered.push(arr[i]);
      }
    }

    return filtered;
  },

  removeWithoutCopy: function(arr, item) {
    let i, len;

    for(i = 0; len = i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === item){
        counter++;
      }
    }

    return counter;
  },

  duplicates: function(arr) {
    let object = {};
    let result = [];

    arr.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (let prop in object) {
       if(object[prop] >= 2) {
           result.push(parseInt(prop));
       }
    }

    return result;
  },

  square: function(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i] * arr[i]);
    }
    return newArr;
  },

  findAllOccurrences: function(arr, target) {
    let ret = [];

    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }

    return ret;
  }
};
