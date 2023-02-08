import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalVisible } from '../slices/modalSlice';

const ApiSuccessModal = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setModalVisible(false));
  };
  return (
    <div>
      API CALL SUCCESS 200!
      <button onClick={onClose}>모달끄기</button>
    </div>
  );
};

export default ApiSuccessModal;
