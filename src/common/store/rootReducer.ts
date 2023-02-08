import { combineReducers } from '@reduxjs/toolkit';
import modalSlice from '../slices/modalSlice';

const rootReducer = combineReducers({
  modalSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
