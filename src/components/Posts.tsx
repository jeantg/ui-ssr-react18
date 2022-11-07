import { useData } from 'context';
import { Post } from './Post';

const Posts = () => {
  const data = useData();
  return (
    <div className="flex  gap-4 flex-col mt-4">
      {data?.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};
export default Posts;
