import { Helmet } from 'react-helmet';

import Login from 'components/login/Login';
export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Login />;
    </>
  );
}
