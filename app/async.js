exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject) {
  	  setTimeout(function() {
  	    resolve(value);
  	  }, 300);
  	});
  },

  manipulateRemoteData: function(url) {
  	var deferred = Promise.defer();

    fetch(url).then(function(resp) {
      let people = resp.map(resp.people, function(person) {
        return person.name;
      }).sort();

      deferred.resolve(people);
    }).catch(function(error){
    	deferred.reject(error);
    });

    return deferred.promise();
  }
};
