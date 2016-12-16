import { normalize, relativeScreenSize } from 'utils/Pixel';

const Colors = {
  primaryColor: '#F64747',
  secondaryColor: '#FFFFFF',
  footerColor: '#BDC3C7',
  shadowColor: '#ff5454',
  fontColor: '#F64747',
  border: '#DADFE1'
};

const Font = {
  small: normalize(13),
  medium: normalize(15),
  large: normalize(18),
};

const Layout = {
  width: {
    p10: relativeScreenSize.width(0.1),
    half: relativeScreenSize.width(0.5),
    p70: relativeScreenSize.width(0.7),
    p90: relativeScreenSize.width(0.9),
  },
  height: {
    p08: relativeScreenSize.height(0.08),
    p20: relativeScreenSize.height(0.20),
    p30: relativeScreenSize.height(0.3),
    p35: relativeScreenSize.height(0.35),
  },
};

export { Colors, Font, Layout };