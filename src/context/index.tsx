import { posts } from 'data';
import { createContext, ReactNode, useContext } from 'react';
type DataProviderProps = {
  children: ReactNode;
  data?: any;
};

const DataContext = createContext<any>(null);
export const DataProvider = ({ children, data }: DataProviderProps) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
export const useData = () => {
  const ctx = useContext(DataContext);
  if (!!ctx) {
    ctx.read();
  }
  return posts;
};
