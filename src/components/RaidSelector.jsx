import styled from 'styled-components';
import { motion } from 'framer-motion';

const SelectorPanel = styled.div`
  width: min(100%, 900px);
  margin: 0 auto 24px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(22, 20, 18, 0.78);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.36);
  backdrop-filter: blur(16px);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const TargetButton = styled(motion.button)`
  display: grid;
  gap: 10px;
  min-height: 132px;
  align-content: center;
  justify-items: center;
  padding: 12px;
  border: 1px solid ${({ $active }) => ($active ? '#d66a3e' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 8px;
  color: ${({ $active }) => ($active ? '#fff6e8' : '#d9cabb')};
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(135deg, rgba(193, 76, 42, 0.95), rgba(108, 55, 32, 0.9))'
      : 'rgba(255, 255, 255, 0.045)'};
  box-shadow: ${({ $active }) =>
    $active ? '0 14px 30px rgba(172, 69, 38, 0.28)' : '0 10px 24px rgba(0, 0, 0, 0.18)'};
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1.25;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    border-color: #d6a15a;
    color: #fff7eb;
    background: ${({ $active }) =>
      $active
        ? 'linear-gradient(135deg, rgba(214, 86, 48, 1), rgba(126, 61, 34, 0.95))'
        : 'rgba(214, 161, 90, 0.12)'};
  }

  &:focus-visible {
    outline: 3px solid rgba(214, 161, 90, 0.38);
    outline-offset: 3px;
  }
`;

const TargetImageBox = styled.span`
  display: grid;
  width: 72px;
  height: 72px;
  place-items: center;
  overflow: hidden;
  border-radius: 8px;
  background: #efe5d7;
  box-shadow: inset 0 0 0 1px rgba(20, 18, 15, 0.08);
`;

const TargetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
`;

const TargetName = styled.span`
  display: block;
  min-height: 2.4em;
`;

function getAssetSrc(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export function RaidSelector({ targets, selectedId, onSelect }) {
  return (
    <SelectorPanel>
      <Grid>
        {targets.map((target) => (
          <TargetButton
            key={target.id}
            $active={selectedId === target.id}
            type="button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(target.id)}
          >
            <TargetImageBox>
              <TargetImage src={getAssetSrc(target.image)} alt="" />
            </TargetImageBox>
            <TargetName>{target.name}</TargetName>
          </TargetButton>
        ))}
      </Grid>
    </SelectorPanel>
  );
}
