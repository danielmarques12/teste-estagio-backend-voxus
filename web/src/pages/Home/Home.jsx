import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { api } from '../../services/api';
import { Container } from './styles';
import Tags from '../../components/Tags';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts/index').then((item) => setPosts(item.data));
  }, []);

  return (
    <Container>
      <div className="post">
        {posts.map((post) => (
          <div key={post.id}>
            <h3> {post.title} </h3>
            <p> {post.author} </p>
            <p>
              Published date:
              {format(parseISO(post.publication_date), 'yyyy/MM/dd')}
            </p>
            <Tags post_id={post.id} />
          </div>
        ))}
      </div>
    </Container>
  );
}
