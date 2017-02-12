'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hookAppState = require('./hookAppState');

var _hookAppState2 = _interopRequireDefault(_hookAppState);

var _hookNetInfo = require('./hookNetInfo');

var _hookNetInfo2 = _interopRequireDefault(_hookNetInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return function (next) {
    return function (reducer, preloadedState) {
      var monitorAppState = options.monitorAppState,
          monitorNetInfo = options.monitorNetInfo;


      var store = next(reducer, preloadedState);

      if (monitorAppState) (0, _hookAppState2.default)(store);
      if (monitorNetInfo) (0, _hookNetInfo2.default)(store);

      // TODO: hook other events

      return store;
    };
  };
};