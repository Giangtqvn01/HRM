import { INTERNAL_SERVER_ERROR } from 'constants/contextError';
import messageError from 'constants/messageError';

import { toast } from '../App';

export const formatCurrency = (value) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
    value
  );

export const handleError = (error) => {
  const context = error?.response?.data?.context || INTERNAL_SERVER_ERROR;
  toast.error(messageError[context]?.message);
};
