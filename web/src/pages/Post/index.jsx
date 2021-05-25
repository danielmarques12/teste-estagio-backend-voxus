/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { api } from '../../services/api';
import { Container, Post } from './styles';
import Tags from '../../components/Tags';

export default function Home({ match }) {
  const [post, setPost] = useState([]);
  const { id: post_id } = match.params;

  useEffect(() => {
    api.get(`/posts/show/${post_id}`).then((item) => setPost(item.data));
  }, []);

  return (
    <Container>
      <Post>
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <Tags post_id={post_id} />
        <p>{post.content}</p>
      </Post>
    </Container>
  );
}
