import { PostValues } from './src/types';
declare global {
  interface Window {
    globalCache: { posts: PostValues[] };
  }
}
