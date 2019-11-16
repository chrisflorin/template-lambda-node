'use strict';

const Q = require('q');

module.exports = {
    run: function () {
        let deferred = Q.defer();

        deferred.resolve({});

        return deferred.promise;
    }
};
