import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  StyledButton,
  Form,
  Input,
  Label,
  Link,
  Container,
  Greeting,
} from './LoginStyled';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Greeting>
          <h1>WELCOME</h1>
          <p>to Phonebook</p>
        </Greeting>

        <Label>
          Email:{' '}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password:
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <StyledButton type="submit" variant="info">
          Log in
        </StyledButton>
        <Button type="button" variant="light">
          <Link to="/register">Sign up</Link>
        </Button>
      </Form>
    </Container>
  );
}
