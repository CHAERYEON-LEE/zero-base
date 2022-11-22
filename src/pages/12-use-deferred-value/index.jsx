/* eslint-disable no-unused-vars */

import { LearnHook, UsingDeferredValueHook } from './components/LearnHook';
import { Container } from '@/components';

/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <Container.Headline lang="en">usDeferredValue Hook</Container.Headline>
      <LearnHook total={400} />
      {/* <UsingDeferredValueHook total={400} /> */}
    </>
  );
}
