import { useMemo, useState } from 'react';
import { Layout } from './components/Layout';
import { RaidCard } from './components/RaidCard';
import { RaidSelector } from './components/RaidSelector';
import { raidTargets } from './data/raidData';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [selectedTargetId, setSelectedTargetId] = useState('');

  const selectedTarget = useMemo(
    () => raidTargets.find((target) => target.id === selectedTargetId),
    [selectedTargetId],
  );

  return (
    <>
      <GlobalStyles />
      <Layout>
        <RaidSelector
          targets={raidTargets}
          selectedId={selectedTargetId}
          onSelect={setSelectedTargetId}
        />
        <RaidCard target={selectedTarget} />
      </Layout>
    </>
  );
}

export default App;
