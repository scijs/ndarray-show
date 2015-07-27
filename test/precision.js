var ndarray = require('ndarray');
var show = require('../');
var fs =  require('fs');
var expected = fs.readFileSync(__dirname + '/1d/width-10.txt', 'utf8');

var test = require('tape');
test('1d with precision', function (t) {
    var m = ndarray([ 1, 2, 3, 4 ]);
    t.equal(show(m,10) + '\n', expected);
    t.end();
});
