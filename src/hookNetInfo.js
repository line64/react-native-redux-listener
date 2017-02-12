import { NetInfo } from 'react-native';
import { NET_INFO_CHANGED } from './constants';

export default (store) => {
  const listener = (isConnected) => {
    store.dispatch({
      type: NET_INFO_CHANGED,
      isConnected,
    });
  };

  NetInfo.isConnected.addEventListener('change', listener);

  NetInfo.isConnected.fetch().then(listener);
};
