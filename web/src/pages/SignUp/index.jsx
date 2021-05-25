import React, { useState } from 'react';
import { api } from '../../services/api';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Text,
  Separator,
  CreateAccountLink,
} from './styles';

export default function SignUp() {
  const [user, setUser] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.post('users/create', user);

    window.location.href = '/login';
  };

  return (
    <Container>
      <Text>
        <h3>BlogPosts SignUp</h3>
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          placeholder="Name"
          type="text"
        />
        <Input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          placeholder="Email"
          type="email"
        />

        <Input
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          placeholder="Password"
          type="password"
        />

        <SubmitInput type="submit" value="Sign Up" />

        <Separator />

        <CreateAccountLink>
          <a href="/login"> Already have an account? </a>
        </CreateAccountLink>
      </Form>
    </Container>
  );
}
