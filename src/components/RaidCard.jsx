import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { resourceMeta } from '../data/raidData';

const CardWrap = styled(motion.article)`
  width: min(100%, 860px);
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
    rgba(17, 15, 13, 0.86);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.48);
  text-align: left;
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(135deg, rgba(190, 72, 38, 0.2), rgba(214, 161, 90, 0.08));

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }
`;

const TargetImageBox = styled.div`
  display: grid;
  width: 96px;
  height: 96px;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: #efe5d7;
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.28);

  @media (max-width: 560px) {
    width: 86px;
    height: 86px;
  }
`;

const TargetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`;

const TargetName = styled.h2`
  margin: 0 0 8px;
  color: #fff5e6;
  font-size: clamp(1.45rem, 4vw, 2.1rem);
`;

const TargetMeta = styled.p`
  margin: 0;
  color: #bdae9d;
  font-size: 0.95rem;
`;

const Badge = styled.span`
  flex: 0 0 auto;
  padding: 9px 12px;
  border: 1px solid rgba(214, 161, 90, 0.36);
  border-radius: 999px;
  color: #f1c47d;
  background: rgba(214, 161, 90, 0.1);
  font-size: 0.82rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding: 18px 18px 0;

  & > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
    justify-self: center;
    width: min(100%, calc((100% - 14px) / 2));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;

    & > :last-child:nth-child(odd) {
      width: 100%;
    }
  }
`;

const BestDeal = styled(motion.div)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  margin: 18px;
  padding: 18px;
  border: 1px solid rgba(240, 138, 47, 0.4);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(240, 138, 47, 0.2), rgba(215, 90, 61, 0.12)),
    rgba(255, 255, 255, 0.045);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.26);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const BestLabel = styled.p`
  margin: 0 0 6px;
  color: #f1c47d;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const BestTitle = styled.h3`
  margin: 0;
  color: #fff5e6;
  font-size: clamp(1.15rem, 3vw, 1.5rem);
`;

const BestText = styled.p`
  margin: 8px 0 0;
  color: #d7c6b2;
  line-height: 1.5;
`;

const ResourceItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 86px minmax(0, 1fr);
  gap: 16px;
  min-height: 138px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.045);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;

  &:hover {
    border-color: ${({ $color }) => $color};
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-3px);
  }

  @media (max-width: 440px) {
    grid-template-columns: 74px minmax(0, 1fr);
    gap: 12px;
    padding: 14px;
  }
`;

const ImageBox = styled.div`
  display: grid;
  width: 86px;
  height: 86px;
  place-items: center;
  align-self: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: #f2eadf;
  box-shadow: 0 12px 26px ${({ $color }) => `${$color}45`};

  @media (max-width: 440px) {
    width: 74px;
    height: 74px;
  }
`;

const ResourceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 7px;
`;

const BestImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const BestImageBox = styled(ImageBox)`
  width: 62px;
  height: 62px;
`;

const ResourceInfo = styled.div`
  min-width: 0;
`;

const ResourceName = styled.h3`
  margin: 0 0 12px;
  color: #fff4e5;
  font-size: 1rem;
`;

const StatLine = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin: 8px 0 0;
  color: #cdbfab;
  font-size: 0.92rem;
`;

const PriceValue = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
`;

const PriceIcon = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  object-fit: contain;
  background: #f2eadf;
`;

const Strong = styled.strong`
  color: #fff1dc;
`;

const EmptyState = styled(motion.div)`
  width: min(100%, 760px);
  margin: 0 auto;
  padding: 28px;
  border: 1px dashed rgba(214, 161, 90, 0.32);
  border-radius: 8px;
  color: #c7b8a8;
  background: rgba(17, 15, 13, 0.58);
`;

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 12, scale: 0.98 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function getAssetSrc(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function getResourcePrice(resourceKey, resource) {
  return resource[resourceMeta[resourceKey].priceField];
}

function getSulfurResources(resources) {
  return Object.entries(resources)
    .filter(([resourceKey]) => resourceMeta[resourceKey].priceField === 'sulfur')
    .map(([resourceKey, resource]) => ({
      key: resourceKey,
      ...resource,
      unitSulfur: resource.sulfur / resource.amount,
      unitDamage: resource.damage,
    }));
}

function getCombinationTitle(combo) {
  return combo.parts
    .map((part) => `${resourceMeta[part.key].label}: ${part.amount} шт.`)
    .join(' + ');
}

function getBestSulfurCombination(target) {
  const resources = getSulfurResources(target.resources);
  let bestCombo = null;

  function search(index, counts) {
    if (index === resources.length) {
      const parts = resources
        .map((resource, resourceIndex) => ({
          key: resource.key,
          amount: counts[resourceIndex],
          sulfur: counts[resourceIndex] * resource.unitSulfur,
          damage: counts[resourceIndex] * resource.unitDamage,
        }))
        .filter((part) => part.amount > 0);

      if (!parts.length) {
        return;
      }

      const damage = parts.reduce((sum, part) => sum + part.damage, 0);

      if (damage < target.health) {
        return;
      }

      const sulfur = parts.reduce((sum, part) => sum + part.sulfur, 0);
      const totalItems = parts.reduce((sum, part) => sum + part.amount, 0);
      const isBetter =
        !bestCombo ||
        sulfur < bestCombo.sulfur ||
        (sulfur === bestCombo.sulfur && totalItems < bestCombo.totalItems);

      if (isBetter) {
        bestCombo = { parts, sulfur, totalItems };
      }

      return;
    }

    const resource = resources[index];
    const maxAmount = Math.ceil(target.health / resource.unitDamage) + 1;

    for (let amount = 0; amount <= maxAmount; amount += 1) {
      search(index + 1, [...counts, amount]);
    }
  }

  search(0, []);

  return bestCombo;
}

function getCheapestResource(target) {
  const { resources } = target;

  if (resources.molotov) {
    const molotov = resources.molotov;

    return {
      parts: [{ key: 'molotov', amount: molotov.amount }],
      price: getResourcePrice('molotov', molotov),
      priceLabel: resourceMeta.molotov.priceLabel,
      title: `${resourceMeta.molotov.label}: ${molotov.amount} шт.`,
      description: 'Для деревянных объектов молотовы считаются самым выгодным вариантом.',
    };
  }

  const bestCombo = getBestSulfurCombination(target);

  return {
    parts: bestCombo.parts,
    price: bestCombo.sulfur,
    priceLabel: 'Цена в сере',
    title: getCombinationTitle(bestCombo),
    description:
      bestCombo.parts.length > 1
        ? 'Подобрана самая дешевая комбинация по сере.'
        : 'Выбрано по минимальной цене в сере.',
  };
}

export function RaidCard({ target }) {
  const cheapestResource = target ? getCheapestResource(target) : null;

  return (
    <AnimatePresence mode="wait">
      {!target ? (
        <EmptyState
          key="empty"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.22 }}
        >
          Выбери объект выше, чтобы увидеть расчёт рейда.
        </EmptyState>
      ) : (
        <CardWrap
          key={target.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <CardHeader>
            <TargetImageBox>
              <TargetImage src={getAssetSrc(target.image)} alt="" />
            </TargetImageBox>
            <div>
              <TargetName>{target.name}</TargetName>
              <TargetMeta>Прочность: {target.durability}</TargetMeta>
            </div>
            <Badge>{target.type}</Badge>
          </CardHeader>

          <ResourceGrid>
            {Object.entries(target.resources).map(([resourceKey, resource], index) => {
              const meta = resourceMeta[resourceKey];
              const price = getResourcePrice(resourceKey, resource);

              return (
                <ResourceItem
                  key={resourceKey}
                  $color={meta.color}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.24, delay: index * 0.06 }}
                >
                  <ImageBox $color={meta.color}>
                    <ResourceImage src={getAssetSrc(meta.image)} alt={meta.label} />
                  </ImageBox>
                  <ResourceInfo>
                    <ResourceName>{meta.label}</ResourceName>
                    <StatLine>
                      Количество <Strong>{resource.amount}</Strong>
                    </StatLine>
                    <StatLine>
                      {meta.priceLabel}
                      <PriceValue>
                        <PriceIcon src={getAssetSrc(meta.priceImage)} alt="" />
                        <Strong>{price.toLocaleString('ru-RU')}</Strong>
                      </PriceValue>
                    </StatLine>
                  </ResourceInfo>
                </ResourceItem>
              );
            })}
          </ResourceGrid>

          {cheapestResource && (
            <BestDeal
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.24, delay: 0.16 }}
            >
              {(() => {
                const priceMeta = resourceMeta[cheapestResource.parts[0].key];

                return (
                  <>
                    <BestImages>
                      {cheapestResource.parts.map((part) => {
                        const meta = resourceMeta[part.key];

                        return (
                          <BestImageBox key={part.key} $color={meta.color}>
                            <ResourceImage src={getAssetSrc(meta.image)} alt={meta.label} />
                          </BestImageBox>
                        );
                      })}
                    </BestImages>
                    <div>
                      <BestLabel>Самый дешевый вариант</BestLabel>
                      <BestTitle>{cheapestResource.title}</BestTitle>
                      <BestText>
                        {cheapestResource.priceLabel}:{' '}
                        <PriceValue>
                          <PriceIcon src={getAssetSrc(priceMeta.priceImage)} alt="" />
                          <Strong>{cheapestResource.price.toLocaleString('ru-RU')}</Strong>
                        </PriceValue>
                        .{' '}
                        {cheapestResource.description}
                      </BestText>
                    </div>
                  </>
                );
              })()}
            </BestDeal>
          )}
        </CardWrap>
      )}
    </AnimatePresence>
  );
}
