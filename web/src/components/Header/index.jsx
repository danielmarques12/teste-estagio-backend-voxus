import React from 'react';
import { Head } from './styles';

export default function Header() {
  return (
    <Head>
      <nav>
        <a href="/">
          <ul>
            <li>Home</li>
          </ul>
        </a>
        <a href="/signup">
          <ul>
            <li>Sign Up</li>
          </ul>
        </a>
        <a href="/posts/create">
          <ul>
            <li>Create Post</li>
          </ul>
        </a>
      </nav>
    </Head>
  );
}
