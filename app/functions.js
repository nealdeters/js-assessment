exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    let ret = [];

    let makeFn = function(val) {
      return function() { return fn(val); };
    };

    for (let i = 0, len = arr.length; i < len; i++) {
      ret.push(makeFn(arr[i]));
    }

    return ret;
  },

  partial: function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let sum = 0;

    for (let i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      let moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
