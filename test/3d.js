var zeros = require('zeros');
var fill = require('ndarray-fill');
var show = require('../');

var m = zeros([ 3, 3, 3 ]);
fill(m, function (x, y, z) {
    return Math.pow(2, 10 * Math.cos(y-3*x+z/2)
        + Math.sin(x * 3 + y - z/8) * (z + 0.3))
    ;
});

var fs =  require('fs');
var expected = fs.readFileSync(__dirname + '/3d/expected.txt', 'utf8');

var test = require('tape');
test('3d', function (t) {
    t.equal(show(m) + '\n', expected);
    t.end();
});
