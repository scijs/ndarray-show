# ndarray-show

display an ndarray

[![testling badge](https://ci.testling.com/substack/ndarray-show.png)](https://ci.testling.com/substack/ndarray-show)

[![build status](https://secure.travis-ci.org/substack/ndarray-show.png)](http://travis-ci.org/substack/ndarray-show)

# example

## 1d

``` js
var ndarray = require('ndarray');
var show = require('ndarray-show');

var m = ndarray([ 1, 2, 3, 4 ]);
console.log(show(m));
```

output:

```
   1.000    2.000    3.000    4.000
```

## 2d

``` js
var ndarray = require('ndarray');
var show = require('ndarray-show');

var m = ndarray([ 1, 4, 2.34e-9, 5.55e55, 3, -990.52 ], [ 3, 2 ]);
console.log(show(m));
```

output:

```
   1.000  2.00e-9    3.000
   4.000  5.55e+5 -990.520
```

## 3d

``` js
var zeros = require('zeros');
var fill = require('ndarray-fill');
var show = require('ndarray-show');

var m = zeros([ 3, 3, 3 ]);
fill(m, function (x, y, z) {
    return Math.pow(2, 10 * Math.cos(y-3*x+z/2)
        + Math.sin(x * 3 + y - z/8) * (z + 0.3))
    ;
});
console.log(show(m));
```

output:

```
 1024.00  1.08e-3  733.106
  50.404    0.048    8.189
   0.068   34.663    0.013

 391.739  4.91e-3   95.054
   3.261    0.893    0.383
 9.16e-3  180.140  3.73e-3

  28.522    0.103    3.177
   0.166   17.011    0.022
 5.02e-3  208.171  5.11e-3

```

## 4d

``` js
var zeros = require('zeros');
var fill = require('ndarray-fill');
var show = require('ndarray-show');

var m = zeros([ 3, 3, 3, 3 ]);
fill(m, function (x, y, z, w) {
    return Math.pow(2 + w/8, 10 * Math.cos(y-3*x+z/2*(w+0.1))
        + Math.sin(x * 3 + y - z/8) * (z + 0.3 - w * 8))
    ;
});
console.log(show(m));
```

output:

```
 1024.00  1.08e-3  733.106
  50.404    0.048    8.189
   0.068   34.663    0.013

 907.293  1.41e-3  489.114
  62.836    0.042    8.451
   0.097   23.167    0.021

 666.755  2.19e-3  275.468
  68.771    0.043    7.465
   0.145   15.113    0.032

--------------------------

 1877.54  2.53e-4  7039.08
   0.444    3.510    0.187
 2.22e-4  15341.0  2.32e-5

 1159.48  7.96e-4  1180.81
   0.024   72.893  8.46e-3
 1.55e-5  1.29e+5  4.88e-6

  88.416    0.017   36.223
 1.19e-3  1262.99  6.08e-4
 7.82e-6  1.32e+5  9.24e-6

--------------------------

 3325.26  5.41e-5  84433.4
 1.78e-3  523.559  2.32e-3
 3.21e-7  1.60e+7  1.70e-8

 249.925  2.15e-3  765.572
 2.53e-6  3.27e+5  4.78e-6
 4.00e-9  4.23e+8  2.00e-9

   0.260    2.227    0.787
 1.56e-7  1.83e+6  2.57e-6
 1.69e-7  2.62e+6  1.15e-6

```

# methods

``` js
var show = require('ndarray-show')
```

## var s = show(m, opts)

Return a string representation `s` of the ndarray `m`.

If you pass in a non-ndarray array-like structure for `m`, it will be converted
into a 1-dimensional ndarray.

Optionally specify the
[fixed-width float](https://npmjs.org/package/fixed-width-float)
size in bytes.

ndarrays with dimensions higher than 4 return undefined.

# install

With [npm](https://npmjs.org) do:

```
npm install ndarray-show
```

# license

MIT
