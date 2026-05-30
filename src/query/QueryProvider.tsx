import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

const queryCLient = new QueryClient();

interface IPropsQueryProvider {
  children: ReactNode;
}

export default function QueryProvider(props: IPropsQueryProvider) {
  return (
    <QueryClientProvider client={queryCLient}>
      {props.children}
    </QueryClientProvider>
  );
}
