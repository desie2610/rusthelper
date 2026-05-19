import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: #11100e;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    color: #f4eadc;
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at top left, rgba(196, 65, 34, 0.22), transparent 34rem),
      radial-gradient(circle at bottom right, rgba(196, 136, 55, 0.16), transparent 30rem),
      linear-gradient(135deg, #151311 0%, #22201c 48%, #100f0d 100%);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  button,
  select {
    font: inherit;
  }

  button {
    border: 0;
  }

  #root {
    min-height: 100vh;
  }
`;
