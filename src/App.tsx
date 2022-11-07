import { Category, Header, Html, Skeleton, Title, UserCard } from 'components';
import { lazy, Suspense } from 'react';
const Posts = lazy(
  () => import(/* webpackChunkName: "posts" */ './components/Posts'),
);

const App = () => {
  return (
    <Html title="SSR React 18">
      <Header />
      <div className="px-6 py-8 font-roboto bg-gray-100 h-full">
        <div className="flex justify-between mx-auto container gap-8">
          <div className='w-full lg:w-8/12"'>
            <Title>Posts</Title>
            <div className="mt-4">
              <Suspense fallback={<Skeleton />}>
                <Posts />
              </Suspense>
            </div>
          </div>
          <div className="w-4/12 flex-col gap-6 hidden lg:flex">
            <div>
              <Title>Authors</Title>
              <div className="flex flex-col bg-white max-w-sm px-6 py-4  rounded-lg shadow-md mt-4 gap-4 min-w-[312px]">
                <UserCard
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  name="John"
                />
                <UserCard
                  src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                  name="Alice"
                />
              </div>
            </div>
            <div>
              <Title>Categories</Title>
              <div className="flex flex-col bg-white max-w-sm px-6 py-4  rounded-lg shadow-md mt-4 gap-4">
                <Category>React</Category>
                <Category>Nextjs</Category>
                <Category>Tailwindcss</Category>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default App;
