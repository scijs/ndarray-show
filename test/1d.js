var ndarray = require('ndarray');
var show = require('../');
var fs =  require('fs');
var fill = require('ndarray-fill')
var pool = require('ndarray-scratch')
var expected = fs.readFileSync(__dirname + '/1d/expected.txt', 'utf8');

var test = require('tape');
test('1d', function (t) {
  var m = pool.zeros([3])
  fill(m,function(i) { return i })

  t.equal(show(m) + '\n', expected);
  t.end();
});
