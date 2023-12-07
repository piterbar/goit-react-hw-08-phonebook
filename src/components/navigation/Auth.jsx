import { Link } from './AuthStyled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>
    </div>
  );
};
