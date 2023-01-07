/* Customize colors in future if need be */

import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#fff',
  '--my-black': '#000',
  '--my-grey': '#000',
  '--my-green': '#0ff',
  '--my-red': '#ff0',
  '--my-yellow': '#fff0',
  '--my-purple': '#f00',
};

const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-white'],
  '--white': props['--my-white'],

  '--gray': props['--my-grey'],
  '--gray-base': props['--my-black'],

  '--brand-primary': props['--my-purple'],

  /* Default button */
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-purple'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-purple'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-purple'],
});

export default myTheme;
