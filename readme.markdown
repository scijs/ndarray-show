# ndarray-show

display an ndarray

[![testling badge](https://ci.testling.com/scijs/ndarray-show.png)](https://ci.testling.com/scijs/ndarray-show)

[![build status](https://secure.travis-ci.org/scijs/ndarray-show.png)](http://travis-ci.org/scijs/ndarray-show)

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
   1.000    4.000
 2.00e-9  5.55e+5
   3.000 -990.520
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
 1024.00  391.739   28.522
  50.404    3.261    0.166
   0.068  9.16e-3  5.02e-3

 1.08e-3  4.91e-3    0.103
   0.048    0.893   17.011
  34.663  180.140  208.171

 733.106   95.054    3.177
   8.189    0.383    0.022
   0.013  3.73e-3  5.11e-3


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
 1024.00  1877.54  3325.26
 907.293  1159.48  249.925
 666.755   88.416    0.260

  50.404    0.444  1.78e-3
  62.836    0.024  2.53e-6
  68.771  1.19e-3  1.56e-7

   0.068  2.22e-4  3.21e-7
   0.097  1.55e-5  4.00e-9
   0.145  7.82e-6  1.69e-7

--------------------------

 1.08e-3  2.53e-4  5.41e-5
 1.41e-3  7.96e-4  2.15e-3
 2.19e-3    0.017    2.227

   0.048    3.510  523.559
   0.042   72.893  3.27e+5
   0.043  1262.99  1.83e+6

  34.663  15341.0  1.60e+7
  23.167  1.29e+5  4.23e+8
  15.113  1.32e+5  2.62e+6

--------------------------

 733.106  7039.08  84433.4
 489.114  1180.81  765.572
 275.468   36.223    0.787

   8.189    0.187  2.32e-3
   8.451  8.46e-3  4.78e-6
   7.465  6.08e-4  2.57e-6

   0.013  2.32e-5  1.70e-8
   0.021  4.88e-6  2.00e-9
   0.032  9.24e-6  1.15e-6
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
