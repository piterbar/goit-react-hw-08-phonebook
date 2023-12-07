import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import Register from '../../components/register/Register';

export default function RegisterPage() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Registration Page</title>
      </Helmet>

      {isLoggedIn ? <Navigate to="/contacts" replace={true} /> : <Register />}
    </>
  );
}
