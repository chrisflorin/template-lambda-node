'use strict';

let dotenv = require('dotenv');
dotenv.config();

module.exports = {
    env: process.env,
    getEnv: function (key) {
        return this.env[key];
    }
};
