exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    if(typeof num === 'number'){
      let fizz = num % 3 === 0;;
      let buzz = num % 5 === 0;

      if(fizz && buzz){
        return 'fizzbuzz';
      } else if(buzz){
        return 'buzz';
      } else if(fizz){
        return 'fizz';
      } else {
        return num;
      }
    }

    return false;
  }
};
