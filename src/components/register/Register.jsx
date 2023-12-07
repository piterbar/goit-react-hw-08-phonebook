import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Button from 'react-bootstrap/Button';
import {
  SignUpBtn,
  Greeting,
  Form,
  Input,
  Label,
  Link,
} from './RegisterStyled';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Greeting>
          <h1>WELCOME</h1>
          <p>to Phonebook</p>
        </Greeting>
        <Label>
          Name{' '}
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <SignUpBtn type="submit" variant="info">
          Sign up
        </SignUpBtn>
        <Button type="button" variant="light">
          <Link to="/login">Log in</Link>
        </Button>
      </Form>
    </>
  );
}
