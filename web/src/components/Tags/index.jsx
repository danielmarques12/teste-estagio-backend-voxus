import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

export default function Tags(props) {
  const [tags, setTags] = useState([]);
  // eslint-disable-next-line react/prop-types
  const { post_id } = props;

  useEffect(() => {
    api.get(`/posts/tags/${post_id}`).then((item) => {
      setTags(item.data);
    });
  }, []);

  return (
    <>
      <p>{tags.map((tag) => tag.name).toString()}</p>
    </>
  );
}
