var ndarray = require('ndarray');
var show = require('../');

var m = ndarray([ 1, 4, 2.34e-9, 5.55e55, 3, -990.52 ], [ 3, 2 ]);
console.log(show(m));
