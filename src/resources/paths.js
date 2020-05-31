// navigation paths
export const paths = {
  HOME: '/home',
  ABOUT: '/about'
};

// resolve nav button name
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