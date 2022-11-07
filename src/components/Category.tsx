import { Children } from 'types';

export const Category = ({ children }: Children) => (
  <a
    className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline "
    href="#"
  >
    - {children}
  </a>
);
