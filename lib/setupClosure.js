'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storeEnhancer = require('./storeEnhancer');

var _storeEnhancer2 = _interopRequireDefault(_storeEnhancer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  monitorAppState: true,
  monitorNetInfo: true,
  monitorKeyboard: true,
  monitorDeepLinks: true,
  monitorBackButton: true
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS;
  return (0, _storeEnhancer2.default)(options);
};