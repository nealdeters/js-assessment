exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	let list = [];
  	let dirs = [];

  	function processDir(dir){
  		let files = dir.files;
  		dirs.push(dir.dir);

  		files.forEach( file => {
  			if(typeof file === 'string'){
  				if(!dirName || dirs.indexOf(dirName) > -1){
  					list.push(file);
  				}
  			} else {
  				processDir(file);
  			}
  		});

  		dirs.pop();
  	}

  	processDir(data);

  	return list;
  },

  permute: function(arr){
    let results = [];
    let temp = [];

    function permutation() {
      for (let i = 0; i < arr.length; i++) {
        // remove the item at index i
        let item = arr.splice(i, 1)[0];

        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          permutation();
        } else {
          // make a copy of temp using .slice()
        	// so we can continue to work with temp
          results.push(temp.slice())
        }

        // restore the item we removed at index i
        // and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }

      return results;
    }

    return permutation();
  },

  fibonacci: function(num, memo) {
  	let self = this;
  	memo = memo || {};

  	// if index is 0, the fibo is 0
  	if (num === 0) return 0;

  	// if index is 1, the fibo is 1
  	if (num === 1) return 1;


  	// if we've already returned a num, get it from memory
  	if (memo[num]) return memo[num];
  	
  	// the pattern of the sequence is that each value is 
  	// the sum of the 2 previous values, 
  	// that means that for N=5 → 2+3 or in maths: 
  	// F(n) = F(n-1) + F(n-2)
  	return memo[num] = self.fibonacci(num - 1, memo) + self.fibonacci(num - 2, memo);
  },

  validParentheses: function(n, memo) {
  	// https://coderbyte.com/algorithm/generate-balanced-bracket-combinations
  	let self = this;
  	memo = memo || {}

  	// ex. n = 3

  	// if n is cached, use result
  	if(memo[n]){
  		return memo[n];å
  	}

  	if(n === 0){
  		return [''];
  	} else {
  		let result = [];
  		for(let i = 0; i < n; i++){
  			let lefts = self.validParentheses(i);
  			let rights = self.validParentheses(n - i - 1);

  			lefts.forEach( (left) => {
  				rights.forEach( (right) => {
  					result.push("(" + left + ")" + right);
  				})
  			})
  		}

  		// console.log(`n: ${n}`)
  		// console.log(`result: ${result}`)

  		// n = 1 => result = ()
  		// n = 2 => result = ()(),(())
  		// n = 3 => result = ()()(), ()(()), (())(), (()()), ((()))

  		// cache the result for n
  		memo[n] = result;
  		return result;
  	}
  }
};
