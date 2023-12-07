import { useAuth } from 'hooks/useAuth';
import { Link } from './LogoStyled';

export const Logo = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn && <Link to="/contacts">PhoneBook</Link>}</div>;
};
