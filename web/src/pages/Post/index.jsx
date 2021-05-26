/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import {
  Container,
  BlogPost,
  Title,
  Author,
  PublicationDate,
  Content,
} from './styles';
import Tags from '../../components/Tags';

export default function Post({ match }) {
  const [post, setPost] = useState([]);
  const { id: post_id } = match.params;

  useEffect(() => {
    api.get(`/posts/show/${post_id}`).then((item) => setPost(item.data));
  }, []);

  return (
    <Container>
      <BlogPost>
        <Title>{post.title}</Title>
        <Author>
          <span>Author:</span> {post.author}
        </Author>
        <PublicationDate>
          <span>Published date:</span> {post.publication_date}
        </PublicationDate>
        <Tags post_id={post_id} />
        <Content>{post.content}</Content>
      </BlogPost>
    </Container>
  );
}
