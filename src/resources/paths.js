// navigation paths
export const paths = {
  HOME: '/',
  ABOUT: '/about',
  RANDOM: '',
};

// resolve nav button name
export const getName = (path) => {
  switch (path) {
    case paths.HOME:
      return '🏠 home';
    case paths.ABOUT:
      return '👩🏻‍💻 about';
    case paths.RANDOM:
      return '🎲 random';
    default:
      return '';
  }
};
