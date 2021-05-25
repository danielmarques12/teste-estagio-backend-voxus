import React, { useState } from 'react';
import {
  Container,
  Form,
  Input,
  SubmitInput,
  Text,
  TextArea,
  Tags,
  AddTagButton,
  TagInput,
} from './styles';
import { api } from '../../services/api';

export default function CreatePost() {
  const [post, setPost] = useState({});
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.post('posts/create', post);
    window.location.href = '/';
  };

  return (
    <Container>
      <Text>
        <h3>Create Blog Post</h3>
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

        <Tags>
          <TagInput
            value={tag}
            onChange={(event) => setTag(event.target.value)}
            placeholder="Tag"
            type="text"
          />
          <AddTagButton
            type="button"
            onClick={() => {
              if (tags.length < 3) setTags(tags.concat({ name: tag }));
              setPost({ ...post, tags });
              setTag('');
            }}
          >
            Add Tag
          </AddTagButton>
        </Tags>

        <SubmitInput type="submit" value="Create Post" />
      </Form>
    </Container>
  );
}
