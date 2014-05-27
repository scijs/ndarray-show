var ndarray = require('ndarray');
var show = require('../');

var fs =  require('fs');
var expected = fs.readFileSync(__dirname + '/2d/expected.txt', 'utf8');

var test = require('tape');
test('2d', function (t) {
    var m = ndarray([ 1, 4, 2.34e-9, 5.55e55, 3, -990.52 ], [ 3, 2 ]);
    t.equal(show(m) + '\n', expected);
    t.end();
});
