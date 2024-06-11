import { ErrorBoundary } from 'react-error-boundary';
import { BalanceSheet } from '@/components';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className='text-3xl font-bold underline text-center'>
        Balance Sheet Report
      </h1>
      <section className='p-8'>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <BalanceSheet />
        </ErrorBoundary>
      </section>
    </QueryClientProvider>
  );
}

export default App;
