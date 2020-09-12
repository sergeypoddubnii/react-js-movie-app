import notificationsSelectors from '../redux/global/notifications/notificationsSelectors';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import notificationsActions from '../redux/global/notifications/notificationsActions';

const useNotifications = () => {
  const { enqueueSnackbar } = useSnackbar();
  const message = useSelector(notificationsSelectors.getMessageNotification);
  const variant = useSelector(notificationsSelectors.getVariantNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message !== undefined) {
      enqueueSnackbar(message, {
        variant,
      });
    }
    dispatch(notificationsActions.removeNotification());
  }, [dispatch, enqueueSnackbar, message, variant]);
};

export default useNotifications;
