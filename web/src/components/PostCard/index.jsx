/* eslint-disable react/prop-types */
import React from 'react';
import { format, parseISO } from 'date-fns';
import { Container } from './styles';
import Tags from '../Tags';

export default function PostCard(props) {
  const { post } = props;

  return (
    <Container>
      <h3> {post.title} </h3>
      <p> {post.author} </p>
      <p>
        Published date: {format(parseISO(post.publication_date), 'yyyy/MM/dd')}
      </p>
      <Tags post_id={post.id} />
    </Container>
  );
}
