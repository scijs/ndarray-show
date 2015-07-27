var zeros = require('zeros');
var fill = require('ndarray-fill');
var pool = require('ndarray-scratch')
var show = require('../');

var m = zeros([ 3, 3, 3, 3 ]);
fill(m, function (x, y, z, w) {
    return Math.pow(2 + w/8, 10 * Math.cos(y-3*x+z/2*(w+0.1))
        + Math.sin(x * 3 + y - z/8) * (z + 0.3 - w * 8))
    ;
});

var fs =  require('fs');
var expected = fs.readFileSync(__dirname + '/4d/expected.txt', 'utf8');
var serial = fs.readFileSync(__dirname + '/4d/serial.txt', 'utf8');

var test = require('tape');
test('4d', function (t) {
  t.equal(show(m) + '\n', expected);
  t.end();
});

test('4d serial', function (t) {
  var A = pool.zeros([3,4,5,6])
  fill( A, function(i,j,k,l) { return i + j * A.shape[0] + k*A.shape[0]*A.shape[1] + l*A.shape[0]*A.shape[1]*A.shape[2] })
  t.equal(show(A), serial);
  t.end();
});
