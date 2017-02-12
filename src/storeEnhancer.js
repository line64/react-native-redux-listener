import hookAppState from './hookAppState';
import hookNetInfo from './hookNetInfo';

export default options => next => (reducer, preloadedState) => {
  const {
    monitorAppState,
    monitorNetInfo,
  } = options;

  const store = next(reducer, preloadedState);

  if (monitorAppState) hookAppState(store);
  if (monitorNetInfo) hookNetInfo(store);

  // TODO: hook other events

  return store;
};
