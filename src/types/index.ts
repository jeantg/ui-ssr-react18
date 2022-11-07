import { ReactNode } from 'react';

export type Children = { children: ReactNode };
export type PostProps = {
  post: PostValues;
};

export type PostValues = {
  id?: string;
  date?: string;
  tag?: string;
  title?: string;
  body?: string;
  image?: string;
  userName?: string;
};
export type PostsProps = {
  posts?: PostValues[];
};
