/*!
 * name: next-nake-clean
 * url: https://github.com/afeiship/next-nake-clean
 * version: 1.0.0
 * date: 2019-07-02T13:47:13.144Z
 * license: MIT
 */

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

//# sourceMappingURL=next-nake-clean.js.map
