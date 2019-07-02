(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var del = require('del');

  nx.nakeClean = function(inPatterns, inOptions) {
    return del.sync(inPatterns, inOptions);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nakeClean;
  }
})();
