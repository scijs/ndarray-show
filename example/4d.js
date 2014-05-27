var zeros = require('zeros');
var fill = require('ndarray-fill');
var show = require('../');

var m = zeros([ 3, 3, 3, 3 ]);
fill(m, function (x, y, z, w) {
    return Math.pow(2 + w/8, 10 * Math.cos(y-3*x+z/2*(w+0.1))
        + Math.sin(x * 3 + y - z/8) * (z + 0.3 - w * 8))
    ;
});
console.log(show(m));
