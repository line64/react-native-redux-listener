'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _constants = require('./constants');

exports.default = function (store) {

  var listener = function listener() {

    store.dispatch({
      type: _constants.APP_STATE_CHANGED,
      currentState: _reactNative.AppState.currentState
    });
  };

  _reactNative.AppState.addEventListener('change', listener);
};