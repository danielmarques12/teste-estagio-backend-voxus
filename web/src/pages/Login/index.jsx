import React, { useState } from 'react';
import { api } from '../../services/api';
import { login } from '../../services/auth';
import { Container, Form, Input, SubmitInput, Text } from './styles';

export default function Login() {
  const [user, setUser] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.post('users/auth', user);

    login(response.data.token);
    window.location.href = '/';
  };

  return (
    <Container>
      <Text>
        <h3>BlogPosts Login</h3>
      </Text>

      <Form onSubmit={handleSubmit}>
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

        <SubmitInput type="submit" value="Login" />
      </Form>
    </Container>
  );
}
