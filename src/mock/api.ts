export const api = (type: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === 'success') {
        resolve('성공했습니다 축하축하');
      } else {
        reject('api호출 실패했습니다 흑흑');
      }
    }, 1000);
  });
};
