import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { api } from '../../services/api';
import {
  Container,
  Post,
  Item,
  Buttons,
  DeletePost,
  RedirectPost,
  EditPost,
} from './styles';
import Tags from '../../components/Tags';
import PostCard from '../../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const handleRedirect = (post_id) => {
    window.location.href = `../post/${post_id}`;
  };

  const handleEdit = async (post_id) => {
    window.location.href = `../posts/edit/${post_id}`;
  };

  const handleDelete = async (post_id) => {
    await api.delete(`/posts/delete/${post_id}`);
    document.location.reload(true);
  };

  useEffect(() => {
    api.get('/posts/index').then((item) => setPosts(item.data));
  }, []);

  return (
    <Container>
      <Post>
        {posts.map((post) => (
          <Item key={post.id}>
            <PostCard post={post} />

            <Buttons>
              <RedirectPost onClick={() => handleRedirect(post.id)}>
                Acess
              </RedirectPost>

              <DeletePost onClick={() => handleDelete(post.id)}>
                Delete
              </DeletePost>

              <EditPost onClick={() => handleEdit(post.id)}>Edit</EditPost>
            </Buttons>
          </Item>
        ))}
      </Post>
    </Container>
  );
}
