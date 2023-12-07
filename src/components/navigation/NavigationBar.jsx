import { Logo } from './Logo';
import UserMenu from './UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/box';

export const NavigationBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Logo />
      {isLoggedIn && <UserMenu />}
    </Box>
  );
};
