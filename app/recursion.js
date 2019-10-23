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

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
