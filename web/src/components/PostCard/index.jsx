/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';
import Tags from '../Tags';

export default function PostCard(props) {
  const { post } = props;

  return (
    <Container>
      <h3> {post.title} </h3>
      <p> Author: {post.author} </p>
      <p>Published date: {post.publication_date}</p>
      <Tags post_id={post.id} />
    </Container>
  );
}
