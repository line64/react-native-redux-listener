'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _constants = require('./constants');

exports.default = function (store) {
  var listener = function listener(isConnected) {
    store.dispatch({
      type: _constants.NET_INFO_CHANGED,
      isConnected: isConnected
    });
  };

  _reactNative.NetInfo.isConnected.addEventListener('change', listener);

  _reactNative.NetInfo.isConnected.fetch().then(listener);
};