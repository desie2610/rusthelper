import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { resourceMeta } from '../data/raidData';

const Panel = styled(motion.section)`
  margin: 18px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.045);
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #fff5e6;
  font-size: 1.18rem;
`;

const HealthPill = styled.div`
  min-width: 156px;
  padding: 10px 12px;
  border: 1px solid rgba(214, 161, 90, 0.3);
  border-radius: 8px;
  color: #f1c47d;
  background: rgba(214, 161, 90, 0.1);
  font-weight: 900;
  text-align: center;
`;

const StatPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 620px) {
    justify-content: stretch;

    ${HealthPill} {
      flex: 1 1 150px;
    }
  }
`;

const HealthTrack = styled.div`
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
`;

const HealthFill = styled.div`
  width: ${({ $value }) => `${$value}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #d75a3d, #f1c47d);
  transition: width 180ms ease;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(17, 15, 13, 0.52);
`;

const ImageBox = styled.div`
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  overflow: hidden;
  border-radius: 8px;
  background: #f2eadf;
`;

const ResourceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
`;

const ItemTitle = styled.h4`
  margin: 0 0 7px;
  color: #fff4e5;
`;

const Muted = styled.p`
  margin: 0;
  color: #cdbfab;
  font-size: 0.88rem;
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const CountInput = styled.input`
  width: 74px;
  padding: 9px 10px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  color: #fff4e5;
  background: rgba(0, 0, 0, 0.22);
`;

const ActionButton = styled.button`
  padding: 9px 12px;
  border-radius: 8px;
  color: ${({ disabled }) => (disabled ? '#8d8173' : '#16110d')};
  background: ${({ disabled }) => (disabled ? 'rgba(255, 255, 255, 0.08)' : '#f1c47d')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-weight: 900;
  transition:
    transform 160ms ease,
    background 160ms ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    background: ${({ disabled }) => (disabled ? 'rgba(255, 255, 255, 0.08)' : '#ffd48d')};
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Result = styled.p`
  margin: 0;
  color: ${({ $success }) => ($success ? '#a7e08c' : '#cdbfab')};
  line-height: 1.45;
`;

function getAssetSrc(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function createEmptyInventory(resources) {
  return Object.fromEntries(Object.keys(resources).map((resourceKey) => [resourceKey, 0]));
}

function getResourceUnitCost(resourceKey, resource) {
  const meta = resourceMeta[resourceKey];
  return resource[meta.priceField] / resource.amount;
}

function buildPlan(target, used) {
  const parts = Object.entries(used)
    .filter(([, amount]) => amount > 0)
    .map(([resourceKey, amount]) => {
      const resource = target.resources[resourceKey];
      const meta = resourceMeta[resourceKey];

      return {
        key: resourceKey,
        amount,
        priceField: meta.priceField,
        cost: amount * getResourceUnitCost(resourceKey, resource),
      };
    });

  const sulfur = parts
    .filter((part) => part.priceField === 'sulfur')
    .reduce((sum, part) => sum + part.cost, 0);
  const tnk = parts
    .filter((part) => part.priceField === 'tnk')
    .reduce((sum, part) => sum + part.cost, 0);

  return {
    parts,
    sulfur,
    tnk,
    source: 'simulation',
  };
}

export function RaidSimulator({ target, onRaidComplete }) {
  const [inventory, setInventory] = useState(() => createEmptyInventory(target.resources));
  const [used, setUsed] = useState(() => createEmptyInventory(target.resources));
  const [healthLeft, setHealthLeft] = useState(target.health);
  const [message, setMessage] = useState('');

  const healthPercent = useMemo(
    () => Math.max(0, Math.round((healthLeft / target.health) * 100)),
    [healthLeft, target.health],
  );
  const spentPlan = useMemo(() => buildPlan(target, used), [target, used]);

  const isDestroyed = healthLeft <= 0;

  function changeInventory(resourceKey, value) {
    const nextValue = Math.max(0, Number(value) || 0);

    setInventory((currentInventory) => ({
      ...currentInventory,
      [resourceKey]: nextValue,
    }));
  }

  function handleUseResource(resourceKey) {
    if (inventory[resourceKey] <= 0 || isDestroyed) {
      return;
    }

    const resource = target.resources[resourceKey];
    const nextUsed = {
      ...used,
      [resourceKey]: used[resourceKey] + 1,
    };
    const nextHealth = Math.max(0, healthLeft - resource.damage);

    setInventory((currentInventory) => ({
      ...currentInventory,
      [resourceKey]: currentInventory[resourceKey] - 1,
    }));
    setUsed(nextUsed);
    setHealthLeft(nextHealth);

    if (nextHealth === 0) {
      const result = onRaidComplete(buildPlan(target, nextUsed));
      setMessage(result);
    }
  }

  function resetSimulation() {
    setInventory(createEmptyInventory(target.resources));
    setUsed(createEmptyInventory(target.resources));
    setHealthLeft(target.health);
    setMessage('');
  }

  return (
    <Panel
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      <TopBar>
        <Title>Симуляция рейда</Title>
        <StatPills>
          <HealthPill>{healthLeft.toFixed(0)} HP осталось</HealthPill>
          <HealthPill>{spentPlan.sulfur.toLocaleString('ru-RU')} серы потрачено</HealthPill>
          {spentPlan.tnk > 0 && (
            <HealthPill>{spentPlan.tnk.toLocaleString('ru-RU')} ТНК потрачено</HealthPill>
          )}
        </StatPills>
      </TopBar>

      <HealthTrack>
        <HealthFill $value={healthPercent} />
      </HealthTrack>

      <Grid>
        {Object.entries(target.resources).map(([resourceKey, resource]) => {
          const meta = resourceMeta[resourceKey];

          return (
            <Item key={resourceKey}>
              <ImageBox>
                <ResourceImage src={getAssetSrc(meta.image)} alt={meta.label} />
              </ImageBox>
              <div>
                <ItemTitle>{meta.label}</ItemTitle>
                <Muted>
                  Урон: {resource.damage.toFixed(resource.damage % 1 ? 1 : 0)} HP · использовано:{' '}
                  {used[resourceKey]}
                </Muted>
                <Controls>
                  <CountInput
                    aria-label={`Инвентарь ${meta.label}`}
                    min="0"
                    type="number"
                    value={inventory[resourceKey]}
                    onChange={(event) => changeInventory(resourceKey, event.target.value)}
                  />
                  <ActionButton
                    disabled={inventory[resourceKey] <= 0 || isDestroyed}
                    type="button"
                    onClick={() => handleUseResource(resourceKey)}
                  >
                    Использовать
                  </ActionButton>
                </Controls>
              </div>
            </Item>
          );
        })}
      </Grid>

      <Footer>
        <Result $success={isDestroyed}>
          {message || 'Впиши, что есть в инвентаре, и прожимай взрывчатку по очереди.'}
        </Result>
        <ActionButton type="button" onClick={resetSimulation}>
          Сбросить
        </ActionButton>
      </Footer>
    </Panel>
  );
}
