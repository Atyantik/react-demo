import { Demo } from '@components/demo';
import { PageLoader } from '@components/page-loader';
import { ErrorBoundary, Head } from '@reactpwa/core';
import { FC, lazy, Suspense } from 'react';

const LazySection = lazy(() => import('@components/test'));
const Home: FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Demo />
    <ErrorBoundary FallbackComponent={() => <>Error</>}>
      <Suspense fallback={<PageLoader />}>
        <LazySection />
      </Suspense>
    </ErrorBoundary>
  </>
);

export default Home;
