var zeros = require('zeros');
var fill = require('ndarray-fill');
var show = require('../');

var m = zeros([ 3, 3, 3 ]);
fill(m, function (x, y, z) {
    return Math.pow(2, 10 * Math.cos(y) + Math.sin(x * 3 + y - z) * z);
});
console.log(show(m));
