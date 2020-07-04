import {
  faHome,
  faInfoCircle,
  faRandom,
} from '@fortawesome/free-solid-svg-icons';

// navigation paths
export const routes = {
  HOME: {
    path: '/',
    name: 'home',
    icon: faHome,
  },
  ABOUT: {
    path: '/about',
    name: 'about',
    icon: faInfoCircle,
  },
  RANDOM: {
    path: '/',
    name: 'random',
    icon: faRandom,
  },
};
