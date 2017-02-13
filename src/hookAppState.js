import { AppState } from 'react-native';
import { APP_STATE_CHANGED } from './constants';

export default (store) => {
  const listener = () => {
    store.dispatch({
      type: APP_STATE_CHANGED,
      currentState: AppState.currentState
    });
  };

  AppState.addEventListener('change', listener);

  listener();
};
