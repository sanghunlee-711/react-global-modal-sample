import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAPI } from '../../common/api/sample';
import { setOpenModal } from '../../common/slices/modalSlice';

const About: React.FC = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setOpenModal('ABOUT_MODAL'));
  };

  const onSuccess = (data: string) => {
    dispatch(setOpenModal('API_SUCCESS_MODAL'));
    console.log('api data', data);
  };

  const onError = (message: string) => {
    dispatch(setOpenModal('API_FAIL_MODAL'));
    console.log('error message', message);
  };
  useEffect(() => {
    getAPI({
      path: 'success는 아님',
      onSuccess,
      onError,
    });
  });

  return (
    <div>
      About 페이지입니다.
      <button onClick={openModal}>모달에서 경고창을 띄워보아요</button>
    </div>
  );
};

export default About;
