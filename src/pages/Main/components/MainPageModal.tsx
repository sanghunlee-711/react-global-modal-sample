import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalVisible } from '../../../common/slices/modalSlice';

const MainPageModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setModalVisible(false));
  };
  return (
    <div>
      Main page의 모달입니다 :)
      <button onClick={onClose}>모달 끄기</button>
    </div>
  );
};

export default MainPageModal;
