import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { normalize } from 'utils';
import { Layout } from './Theme';

const viewImages = {
  logo: require('img/logo/modern.png'),
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  image: {
    alignSelf: 'center',
    width: normalize(65),
    height: normalize(65),
    resizeMode: 'contain',
  },
});

export function Logo(props) {
  const { isKeyboardVisible, resizedHeight } = props;
  let height = Layout.height.p30;

  if (isKeyboardVisible && Platform.OS === 'ios') {
    height = resizedHeight;
  }

  return (
    <View style={[styles.container, { height }]}>
      <Image
        style={styles.image}
        source={viewImages.logo}
      />
    </View>
  );
}

Logo.propTypes = {
  isKeyboardVisible: PropTypes.bool,
  resizedHeight: PropTypes.number,
};