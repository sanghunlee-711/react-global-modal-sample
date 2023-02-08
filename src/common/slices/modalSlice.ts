import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGlobalModal } from '../types/globalModal';

interface IModalSliceState {
  visibility: boolean;
  type: TGlobalModal;
}

const initialState: IModalSliceState = {
  visibility: false,
  type: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisible(state, { payload }: PayloadAction<boolean>) {
      state.visibility = payload;
    },
    setOpenModal(state, { payload }: PayloadAction<TGlobalModal>) {
      state.visibility = true;
      state.type = payload;
    },
    initializeGlobalModalState() {
      return initialState;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { setModalVisible, setOpenModal, initializeGlobalModalState } =
  actions;
export default reducer;
