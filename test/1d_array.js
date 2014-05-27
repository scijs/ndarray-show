var show = require('../');
var fs =  require('fs');
var expected = fs.readFileSync(__dirname + '/1d/expected.txt', 'utf8');

var test = require('tape');
test('1d array', function (t) {
    var m = [ 1, 2, 3, 4 ];
    t.equal(show(m) + '\n', expected);
    t.end();
});
