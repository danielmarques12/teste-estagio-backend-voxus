/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Form, Input, SubmitInput, Text, TextArea } from './styles';
import { api } from '../../services/api';

export default function EditPost({ match }) {
  const [post, setPost] = useState({});
  const { id: post_id } = match.params;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.patch(`posts/update/${post_id}`, post);
    window.location.href = '/';
  };

  useEffect(() => {
    api.get(`posts/show/${post_id}`).then((item) => setPost(item.data));
  }, []);

  return (
    <Container>
      <Text>
        <h3>Edit Post</h3>
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
          placeholder="Title"
          type="text"
        />

        <TextArea
          value={post.content}
          onChange={(event) =>
            setPost({ ...post, content: event.target.value })
          }
          placeholder="Content"
          type="Content"
        />

        <SubmitInput type="submit" value="Edit Post" />
      </Form>
    </Container>
  );
}
