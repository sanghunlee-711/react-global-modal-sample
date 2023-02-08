import React from 'react';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../common/slices/modalSlice';

const About: React.FC = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setOpenModal('ABOUT_MODAL'));
  };

  return (
    <div>
      About 페이지입니다.
      <button onClick={openModal}>모달에서 경고창을 띄워보아요</button>
    </div>
  );
};

export default About;
