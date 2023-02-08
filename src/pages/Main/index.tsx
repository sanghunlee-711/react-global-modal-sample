import React from 'react';
import { useDispatch } from 'react-redux';
import { setOpenModal } from '../../common/slices/modalSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setOpenModal('HOME_MODAL'));
  };
  return (
    <div>
      This is Home page!
      <button onClick={openModal}>Open Modal!</button>
    </div>
  );
};

export default Home;
