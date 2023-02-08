import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../common/slices/modalSlice';
import { api } from '../../mock/api';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setOpenModal('HOME_MODAL'));
  };

  const getAPI = async () => {
    try {
      const res = await api('success');
      dispatch(setOpenModal('API_SUCCESS_MODAL'));
      console.log({ res });
    } catch (err) {
      dispatch(setOpenModal('API_FAIL_MODAL'));
    }
  };

  useEffect(() => {
    getAPI();
  });

  return (
    <div>
      This is Home page!
      <button onClick={openModal}>Open Modal!</button>
    </div>
  );
};

export default Home;
