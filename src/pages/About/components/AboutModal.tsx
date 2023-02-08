import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModalVisible } from '../../../common/slices/modalSlice';

const AboutModal = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const doAlertWithMessage = (message: string) => {
    alert(message);
  };

  const onClose = () => {
    dispatch(setModalVisible(false));
  };
  return (
    <div>
      About page의 모달입니다 :)
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        <button onClick={() => doAlertWithMessage(value)}>
          적은 메시지로 경고창 띄우기
        </button>
        <button onClick={onClose}>모달 끄기</button>
      </div>
    </div>
  );
};

export default AboutModal;
