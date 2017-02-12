'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRNListener = undefined;

var _constants = require('./constants');

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _setupClosure = require('./setupClosure');

var _setupClosure2 = _interopRequireDefault(_setupClosure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.setupRNListener = _setupClosure2.default;