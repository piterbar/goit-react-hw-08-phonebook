import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
