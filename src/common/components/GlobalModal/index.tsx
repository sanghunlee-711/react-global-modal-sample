import React from 'react';
import AboutModal from '../../../pages/About/components/AboutModal';
import MainPageModal from '../../../pages/Main/components/MainPageModal';
import useRootState from '../../hooks/useRootState';
import Portal from '../Portal';
import './style/globalModal.css';

const MODAL_TYPES = {
  HOME_MODAL: 'HOME_MODAL',
  ABOUT_MODAL: 'ABOUT_MODAL',
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.HOME_MODAL,
    component: <MainPageModal />,
  },
  {
    type: MODAL_TYPES.ABOUT_MODAL,
    component: <AboutModal />,
  },
];

export const GlobalModal: React.FC = () => {
  const { visibility, type } = useRootState((state) => state.modalSlice);

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === type;
  });

  return (
    <Portal id="modal">
      {visibility && (
        <div className="back-drop">
          <div className="modal-wrapper">{findModal?.component}</div>
        </div>
      )}
    </Portal>
  );
};

export default GlobalModal;
