import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function Posts(props) {
  const [tags, setTags] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { post_id } = props;

  useEffect(() => {
    api.get(`/posts/tags/${post_id}`).then((item) => setTags(item.data));
  }, []);

  return (
    <>
      {tags.map((tag) => (
        <p key={tag.id}> {tag.name} </p>
      ))}
    </>
  );
}
