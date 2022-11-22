import { Container } from '@/components';
import { LearnHook } from './components/LearnHook';

/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <Container.Headline lang="en">useMemo Hook</Container.Headline>
      <LearnHook />
    </>
  );
}
