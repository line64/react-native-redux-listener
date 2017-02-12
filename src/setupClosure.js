import storeEnhancer from './storeEnhancer';

const DEFAULT_OPTIONS = {
  monitorAppState: true,
  monitorNetInfo: true,
  monitorKeyboard: true,
  monitorDeepLinks: true,
  monitorBackButton: true,
};

export default (options = DEFAULT_OPTIONS) => storeEnhancer(options);
