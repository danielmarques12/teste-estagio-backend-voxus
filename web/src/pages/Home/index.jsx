import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { api } from '../../services/api';
import { Container, Post, Item } from './styles';
import Tags from '../../components/Tags';

export default function Home() {
  const [posts, setPosts] = useState([]);

  function redirectToPost(post_id) {
    window.location.href = `../post/${post_id}`;
  }

  useEffect(() => {
    api.get('/posts/index').then((item) => setPosts(item.data));
  }, []);

  return (
    <Container>
      {/* // Just iterate posts array and show Post component */}
      <Post>
        {posts.map((post) => (
          <Item onClick={() => redirectToPost(post.id)} key={post.id}>
            <h3> {post.title} </h3>
            <p> {post.author} </p>
            <p>
              Published date:{' '}
              {format(parseISO(post.publication_date), 'yyyy/MM/dd')}
            </p>
            <Tags post_id={post.id} />
          </Item>
        ))}
      </Post>
    </Container>
  );
}
