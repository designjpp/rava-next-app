import { createGlobalStyle, css } from 'styled-components'

import { resetStyles } from './reset'
import { variables } from './variables'

// stylelint-disable selector-type-no-unknown
export const Styles = createGlobalStyle`
  ${resetStyles}

  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Light'), local('Roboto-Light'),
        url('/fonts/roboto-v20-latin-300.woff2') format('woff2')

  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'),
        url('/fonts/roboto-v20-latin-regular.woff2') format('woff2')
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold'), local('Roboto-Bold'),
        url('/fonts/roboto-v20-latin-700.woff2') format('woff2')
  }

  :root {
    --scale-element: 1;
    --scale-font: 1;

    --body-line-height: 1.4;
  --heading-line-height: 1.2;

    --font-primary-capital-letter: 1;

    ${variables.verticalBreakpoints.map(
      ({ height, scale }) => css`
        @media (max-height: ${height}) {
          --scale-element: ${scale};
          --scale-font: ${scale};
        }
      `
    )}

  --font-base: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;;
  --font-title: "Roboto", sans-serif;;
  --monospace: consolas, monospace;

  --font-size-headline: 12rem;
  --font-size-subheadline: 8rem;
  --font-size-1: 6rem;
  --font-size-2: 4rem;
  --font-size-3: 3rem;
  --font-size-4: 2rem;
  --font-size-5: 1.5rem;
  --font-size-6: 1rem;
  --font-size-7: 0.75rem;
  --font-size-8: 0.5rem;
  --font-size-9: 0.15rem;

  --measure: 30em;
  --measure-narrow: 20em;
  --measure-wide: 34em;

  --letter-spacing-tight:-.05em;
  --letter-spacing-1:.1em;
  --letter-spacing-2:.25em;

  --line-height-solid: 1.15;
  --line-height-title: 1.29;
  --line-height-copy: 1.6;

  --spacing-extra-small: 0.25rem;
  --spacing-small: 0.5rem;
  --spacing-medium: 1rem;
  --spacing-large: 2rem;
  --spacing-extra-large: 4rem;
  --spacing-extra-extra-large: 8rem;
  --spacing-extra-extra-extra-large: 16rem;

  --border-radius-1: 0.125rem;
  --border-radius-2: 0.25rem;
  --border-radius-3: 0.5rem;
  --border-radius-4: 1rem;
  --border-radius-circle: 100%;
  --border-radius-pill: 9999px;

  --box-shadow-1: 0px 0px 4px 2px rgba( 0, 0, 0, 0.2 );
  --box-shadow-2: 0px 0px 8px 2px rgba( 0, 0, 0, 0.2 );
  --box-shadow-3: 2px 2px 4px 2px rgba( 0, 0, 0, 0.2 );
  --box-shadow-4: 2px 2px 8px 0px rgba( 0, 0, 0, 0.2 );
  --box-shadow-5: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );

  --height-1: 1rem;
  --height-2: 2rem;
  --height-3: 4rem;
  --height-4: 8rem;
  --height-5: 16rem;
  --width-1: 1rem;
  --width-2: 2rem;
  --width-3: 4rem;
  --width-4: 8rem;
  --width-5: 16rem;

  --max-width-1: 1rem;
  --max-width-2: 2rem;
  --max-width-3: 4rem;
  --max-width-4: 8rem;
  --max-width-5: 16rem;
  --max-width-6: 32rem;
  --max-width-7: 48rem;
  --max-width-8: 64rem;
  --max-width-9: 96rem;
  
  --color-bg: #ffffff;
  --color-bg-shade: #e0e0e0;
  --color-bg-tint: #ffffff;
  
  --primary-000: #350a0e;
  --primary-100: #591017;
  --primary-200: #7e1721;
  --primary-300: #a61f2b;
  --primary-400: #bd3f4b;
  --primary-500: #ca636d;
  --primary-600: #d5848b;
  --primary-700: #dfa3a9;
  --primary-800: #eac2c5;
  --primary-900: #f4e0e2;

  --secondary-000: #1a1a1a;
  --secondary-100: #2c2c2c;
  --secondary-200: #404040;
  --secondary-300: #565656;
  --secondary-400: #6c6c6c;
  --secondary-500: #828282;
  --secondary-600: #9a9a9a;
  --secondary-700: #b2b2b2;
  --secondary-800: #cbcbcb;
  --secondary-900: #e5e5e5;
}
  ::selection {
    background-color: var(--primary-300);
    color: var(--color-bg);
  }
  html,
  body {
    min-height: 100vh;

    background-color: var(--color-bg);
  }

  html {
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    /* always show the vertical scrollbar so that content doesn't jump */
    overflow-y: scroll;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  }

  /* inherited from <html> */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {

    position: relative;

    margin: 0;

    font-family: var(--font-base);
    font-size: var(--font-size-6)/var(--line-height-solid);;
    font-weight: 400;
    /* iOS on orientation change */
    text-size-adjust: 100%;

    color: var(--secondary-200);
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* placeholders */
  input,
  textarea,
  select {
    &::placeholder {
      opacity: 1;
      color: ${variables.colors.placeholder};
    }
  }
`
