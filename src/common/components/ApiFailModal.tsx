import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalVisible } from '../slices/modalSlice';

const ApiFailModal = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setModalVisible(false));
  };
  return (
    <div>
      API CALL FAIL 400 sth!
      <button onClick={onClose}>모달끄기</button>
    </div>
  );
};

export default ApiFailModal;
