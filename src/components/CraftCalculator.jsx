import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { craftItems, materialMeta } from '../data/craftData';

const Section = styled.section`
  width: min(100%, 860px);
  margin: 24px auto 0;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(22, 20, 18, 0.78);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.32);
  text-align: left;
  backdrop-filter: blur(16px);
`;

const Header = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 16px;

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;

  @media (max-width: 620px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

const TitleGroup = styled.div`
  min-width: 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 6px;
  color: #d6a15a;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  color: #fff5e6;
  font-size: clamp(1.45rem, 4vw, 2rem);
`;

const Control = styled.label`
  display: grid;
  gap: 7px;
  color: #cdbfab;
  font-size: 0.88rem;
  font-weight: 800;
`;

const AmountInput = styled.input`
  width: 112px;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  color: #fff4e5;
  background: rgba(0, 0, 0, 0.24);
  font-weight: 900;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

const ItemsGrid = styled.div`
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

const CraftButton = styled(motion.button)`
  display: grid;
  gap: 10px;
  justify-items: center;
  min-height: 142px;
  padding: 12px;
  border: 1px solid ${({ $active }) => ($active ? '#d66a3e' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 8px;
  color: ${({ $active }) => ($active ? '#fff6e8' : '#d9cabb')};
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(135deg, rgba(193, 76, 42, 0.95), rgba(108, 55, 32, 0.9))'
      : 'rgba(255, 255, 255, 0.045)'};
  cursor: pointer;
  font-weight: 900;
`;

const ItemImageBox = styled.span`
  display: grid;
  width: 74px;
  height: 74px;
  place-items: center;
  overflow: hidden;
  border-radius: 8px;
  background: #f2eadf;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
`;

const Workbench = styled.span`
  color: #f1c47d;
  font-size: 0.78rem;
`;

const ActionButton = styled.button`
  align-self: end;
  padding: 11px 14px;
  border-radius: 8px;
  color: #16110d;
  background: #f1c47d;
  cursor: pointer;
  font-weight: 900;
  transition:
    background 160ms ease,
    transform 160ms ease;

  &:hover {
    background: #ffd48d;
    transform: translateY(-2px);
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 14px;
  margin-top: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const CartGrid = styled(ResultGrid)`
  grid-template-columns: 1fr 1.25fr;
`;

const Panel = styled.div`
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.045);
`;

const PanelTitle = styled.h3`
  margin: 0 0 12px;
  color: #fff4e5;
  font-size: 1rem;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  color: #d8c9b8;

  &:first-of-type {
    border-top: 0;
  }
`;

const CartLine = styled(Line)`
  align-items: center;
`;

const CartItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

const SmallImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 7px;
  object-fit: contain;
  background: #f2eadf;
`;

const RemoveButton = styled.button`
  padding: 7px 9px;
  border-radius: 8px;
  color: #f2c8b8;
  background: rgba(215, 90, 61, 0.14);
  cursor: pointer;
  font-weight: 900;

  &:hover {
    background: rgba(215, 90, 61, 0.24);
  }
`;

const MaterialName = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const MaterialImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  object-fit: contain;
  background: #f2eadf;
`;

const Amount = styled.strong`
  color: #fff1dc;
  white-space: nowrap;
`;

function getAssetSrc(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function getTotals(item, amount) {
  return Object.entries(item.rawMaterials).map(([materialKey, value]) => ({
    key: materialKey,
    amount: value * amount,
    ...materialMeta[materialKey],
  }));
}

function mergeTotals(cart) {
  const totalsMap = cart.reduce((acc, cartItem) => {
    Object.entries(cartItem.item.rawMaterials).forEach(([materialKey, value]) => {
      acc[materialKey] = (acc[materialKey] ?? 0) + value * cartItem.amount;
    });

    return acc;
  }, {});

  return Object.entries(totalsMap).map(([materialKey, value]) => ({
    key: materialKey,
    amount: value,
    ...materialMeta[materialKey],
  }));
}

export function CraftCalculator() {
  const [selectedId, setSelectedId] = useState(craftItems[0].id);
  const [amount, setAmount] = useState(1);
  const [cart, setCart] = useState([]);
  const selectedItem = craftItems.find((item) => item.id === selectedId) ?? craftItems[0];
  const safeAmount = Math.max(1, Number(amount) || 1);
  const totals = useMemo(() => getTotals(selectedItem, safeAmount), [selectedItem, safeAmount]);
  const cartTotals = useMemo(() => mergeTotals(cart), [cart]);

  function addToCart() {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.id === selectedId);

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === selectedId
            ? { ...cartItem, amount: cartItem.amount + safeAmount }
            : cartItem,
        );
      }

      return [...currentCart, { id: selectedId, item: selectedItem, amount: safeAmount }];
    });
  }

  function removeFromCart(itemId) {
    setCart((currentCart) => currentCart.filter((cartItem) => cartItem.id !== itemId));
  }

  return (
    <Section>
      <Header>
        <TitleGroup>
          <Eyebrow>Craft system</Eyebrow>
          <Title>Крафт взрывчатки</Title>
        </TitleGroup>
        <HeaderActions>
          <Control>
            Сколько штук
            <AmountInput
              min="1"
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </Control>
          <ActionButton type="button" onClick={addToCart}>
            Добавить
          </ActionButton>
        </HeaderActions>
      </Header>

      <ItemsGrid>
        {craftItems.map((item) => (
          <CraftButton
            key={item.id}
            $active={selectedId === item.id}
            type="button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedId(item.id)}
          >
            <ItemImageBox>
              <ItemImage src={getAssetSrc(item.image)} alt="" />
            </ItemImageBox>
            {item.label}
            <Workbench>{item.workbench}</Workbench>
          </CraftButton>
        ))}
      </ItemsGrid>

      <ResultGrid>
        <Panel>
          <PanelTitle>Рецепт на {safeAmount} шт.</PanelTitle>
          {selectedItem.directIngredients.map((ingredient) => (
            <Line key={ingredient.label}>
              <span>{ingredient.label}</span>
              <Amount>x{ingredient.amount * safeAmount}</Amount>
            </Line>
          ))}
        </Panel>

        <Panel>
          <PanelTitle>Сырьё с нуля</PanelTitle>
          {totals.map((material) => (
            <Line key={material.key}>
              <MaterialName>
                {material.image && <MaterialImage src={getAssetSrc(material.image)} alt="" />}
                {material.label}
              </MaterialName>
              <Amount>x{material.amount.toLocaleString('ru-RU')}</Amount>
            </Line>
          ))}
        </Panel>
      </ResultGrid>

      <CartGrid>
        <Panel>
          <PanelTitle>Список крафта</PanelTitle>
          {cart.length === 0 ? (
            <Line>
              <span>Добавь предметы выше</span>
              <Amount>x0</Amount>
            </Line>
          ) : (
            cart.map((cartItem) => (
              <CartLine key={cartItem.id}>
                <CartItem>
                  <SmallImage src={getAssetSrc(cartItem.item.image)} alt="" />
                  {cartItem.item.label}
                </CartItem>
                <CartItem>
                  <Amount>x{cartItem.amount}</Amount>
                  <RemoveButton type="button" onClick={() => removeFromCart(cartItem.id)}>
                    Убрать
                  </RemoveButton>
                </CartItem>
              </CartLine>
            ))
          )}
        </Panel>

        <Panel>
          <PanelTitle>Итого ресурсов</PanelTitle>
          {cartTotals.length === 0 ? (
            <Line>
              <span>Пока ничего не надо</span>
              <Amount>x0</Amount>
            </Line>
          ) : (
            cartTotals.map((material) => (
              <Line key={material.key}>
                <MaterialName>
                  {material.image && <MaterialImage src={getAssetSrc(material.image)} alt="" />}
                  {material.label}
                </MaterialName>
                <Amount>x{material.amount.toLocaleString('ru-RU')}</Amount>
              </Line>
            ))
          )}
        </Panel>
      </CartGrid>
    </Section>
  );
}
