exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let r = /\d+/;
    return r.test(str);
  },

  containsRepeatingLetter: function(str) {
    // ([a-zA-Z]) - A letter which it captures in the first group
    // .*? - zero or more characters (the ? denotes as few as possible)
    // \1 - it finds a repeat of the first matched character

    let r = /([a-zA-Z]).*?\1/;
    return r.test(str);
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var matches = (/\d{3}/).exec(str);
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    let r = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    return r.test(str);
  },

  isUSD: function(str) {
    let r = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return r.test(str);
  }
};
