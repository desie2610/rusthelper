import styled from 'styled-components';

const PageShell = styled.main`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 48px 18px;

  @media (max-width: 640px) {
    padding: 28px 14px;
  }
`;

const Content = styled.section`
  width: min(100%, 1080px);
  text-align: center;
`;

const Header = styled.header`
  display: grid;
  gap: 12px;
  justify-items: center;
  margin-bottom: 30px;
`;

const Eyebrow = styled.p`
  margin: 0;
  color: #d6a15a;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  max-width: 760px;
  margin: 0;
  color: #fff7eb;
  font-size: clamp(2.3rem, 7vw, 5rem);
  line-height: 0.95;
  text-shadow: 0 18px 38px rgba(0, 0, 0, 0.45);
`;

const Subtitle = styled.p`
  max-width: 620px;
  margin: 0;
  color: #c9baaa;
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.6;
`;

export function Layout({ children }) {
  return (
    <PageShell>
      <Content>
        <Header>
          <Eyebrow>Raid chaos mode</Eyebrow>
          <Title>Сука, сколько нам надо проебать?</Title>
          <Subtitle>
            Выбери что рейдить, а я покажу самый нищий вариант.
          </Subtitle>
        </Header>

        {children}
      </Content>
    </PageShell>
  );
}
