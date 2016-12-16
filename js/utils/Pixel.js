import { Dimensions } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  return Math.round(scale * size);
}

export const relativeScreenSize = {
  height: (ratio = 1) => ratio * SCREEN_HEIGHT,
  width: (ratio = 1) => ratio * SCREEN_WIDTH,
};