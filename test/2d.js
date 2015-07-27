var ndarray = require('ndarray');
var show = require('../');
var fill = require('ndarray-fill')
var pool = require('ndarray-scratch')

var fs =  require('fs');
var expected = fs.readFileSync(__dirname + '/2d/expected.txt', 'utf8');
var serial = fs.readFileSync(__dirname + '/2d/serial.txt', 'utf8');

var test = require('tape');

test('2d', function (t) {
  var m = ndarray([ 1, 4, 2.34e-9, 5.55e55, 3, -990.52 ], [ 3, 2 ]);
  t.equal(show(m) + '\n', expected);
  t.end();
});

test('2d', function (t) {
  var m = pool.zeros([3,4])
  fill(m,function(i,j) { return i + j*m.shape[0] })
  t.equal(show(m) + '\n', serial);
  t.end();
});
