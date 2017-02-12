# react-native-redux-listener
Redux store enhancer to dispatch common React Native events

## Motivation
*React Native* provides a lot of information about the app's environment through event
listeners: app state, net info, keyboard state, back-button and deep links.
When using *Redux*, we find ourselves needing this environmental info inside our
reducers to act upon it. Hooking event listeners and dispatching actions isn't a
hard task, but it's a lot of plumbing that could be avoided.

## How it works
This library works as a Redux store enhancer that automatically hooks to React
Native event listeners and dispatches all events as primitive actions that can
be handled by the reducers of your app.

## Goals
- out-of-the-box setup with minimum coding
- handle all of the built-in events that come with the RN framework
- opt-out of events that you don't need
- (WIP) handle events from some well-known third-party libs (eg: device-info, orientation)

## Usage
Add the `reactNativeListener` store enhancer in your store creation procedure:
```js
import { createStore, applyMiddleware, compose } from 'redux';
import { setupRNListener } from 'react-native-redux-listener';

const enhancer = compose(
  //inject store enhancer
  setupRNListener({
    monitorAppState: true,
    monitorNetInfo: true,
    monitorKeyboard: true,
    monitorDeepLinks: true,
    monitorBackButton: true,
  }),
  applyMiddleware(...middleware),
);

// Note: passing enhancer as the last argument to createStore requires redux@>=3.1.0
const store = createStore(reducer, initialState, enhancer);
```
once you have your listener running, you can start receiving actions in your reducers like this:
```js
import {
  APP_STATE_CHANGED,
  NET_INFO_CHANGED,
  //any other action you need
} from 'react-native-redux-listener';

export default function (state = initialState, action = {}) {

  switch (action.type) {
    case APP_STATE_CHANGED:
      return {
        ...state,
        appIsActive: (action.newState == 'active'),
      };
    case NET_INFO_CHANGED:
      return {
        ...state,
        appIsOnline: (action.isConnected == true),
      };
    default:
      return state;
  }

}
```

## Available actions

### APP_STATE_CHANGED
Dispatched each time the app changes its current state (active, background, etc).
```
{
  type: APP_STATE_CHANGED,
  newState: string,
}
```

### NET_INFO_CHANGED
Dispatched each time the app changes its connection status (online/offline)
```
{
  type: NET_INFO_CHANGED,
  isConnected: bool
}
```
