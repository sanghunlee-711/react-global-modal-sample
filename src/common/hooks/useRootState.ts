import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

type StateSelector<T> = (state: RootState) => T;

const useRootState = <T>(selector: StateSelector<T>): T => {
  return useSelector(selector, shallowEqual);
};
export default useRootState;
