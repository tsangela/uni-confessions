import { paths } from './constants';

export const getName = path => {
  switch (path) {
    case paths.HOME:
      return '🏠 home';
    case paths.ABOUT:
      return '👩🏻‍💻 about';
    default:
      return '';
  }
}