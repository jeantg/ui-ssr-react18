import { PostValues } from 'types';
export const posts = [
  {
    id: '1',
    date: 'Jun 1, 2020',
    tag: 'Laravel',
    title: 'Build Your New Idea with Laravel Freamwork.',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80',
    userName: 'Alex John',
  },
];
export const getData = async (): Promise<PostValues[]> =>
  new Promise((resolve) => setTimeout(() => resolve(posts), 5000));
