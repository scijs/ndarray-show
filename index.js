var showf = require('fixed-width-float');

module.exports = function (m, opts) {
    if (!opts) opts = {};
    if (!opts.width) opts.width = 8;
    
    if (m.dimension === 1) return d1(m, opts);
    if (m.dimension === 2) return d2(m, opts);
    if (m.dimension === 3) return d3(m, opts);
};

function d1 (m, opts) {
    var terms = [];
    for (var i = 0; i < m.shape[0]; i++) {
        terms.push(showf(m.get(i), opts.width));
    }
    return terms.join(' ');
}

function d2 (m, opts) {
    var rows = [];
    for (var y = 0; y < m.shape[1]; y++) {
        var row = [];
        for (var x = 0; x < m.shape[0]; x++) {
            row.push(showf(m.get(x, y), opts.width));
        }
        rows.push(row.join(' '));
    }
    return rows.join('\n');
}

function d3 (m, opts) {
    var rows = [];
    for (var z = 0; z < m.shape[2]; z++) {
        rows.push(d2(m.pick(z), opts), '');
    }
    return rows.join('\n');
}
