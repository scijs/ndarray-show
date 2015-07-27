var zeros = require('zeros');
var fill = require('ndarray-fill');
var show = require('../');
var pool = require('ndarray-scratch')

var m = zeros([ 3, 3, 3 ]);
fill(m, function (x, y, z) {
    return Math.pow(2, 10 * Math.cos(y-3*x+z/2)
        + Math.sin(x * 3 + y - z/8) * (z + 0.3))
    ;
});

var fs =  require('fs');
var expected = fs.readFileSync(__dirname + '/3d/expected.txt', 'utf8');
var serial = fs.readFileSync(__dirname + '/3d/serial.txt', 'utf8');

var test = require('tape');
test('3d', function (t) {
  t.equal(show(m) + '\n', expected);
  t.end();
});

test('3d serial', function (t) {
  var A = pool.zeros([3,4,5])
  fill(A, function(i,j,k) { return i + j*A.shape[0] + k*A.shape[0]*A.shape[1]})

  t.equal(show(A), serial);
  t.end();
});
