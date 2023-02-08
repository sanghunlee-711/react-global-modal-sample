import { api } from '../../mock/api';

export const getAPI = async ({
  path,
  onSuccess,
  onError,
}: {
  path: string;
  onSuccess: (data: string) => void;
  onError: (message: string) => void;
}) => {
  try {
    const res = await api(path);
    onSuccess(res as string);
  } catch (err: any) {
    onError(err.message);
  }
};
