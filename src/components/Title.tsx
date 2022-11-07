import { Children } from 'types';

export const Title = ({ children }: Children) => (
  <h1 className="text-xl font-bold text-gray-700 md:text-2xl">{children}</h1>
);
