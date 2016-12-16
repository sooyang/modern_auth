import React, { PropTypes } from 'react';
import { Image, StyleSheet } from 'react-native';
import { normalize } from 'utils';

const styles = StyleSheet.create({
  default: {
    width: normalize(18),
    height: normalize(18),
  },
});

const icons = {
  user: require('img/user.png'),
  mail: require('img/mail.png'),
  lock: require('img/lock.png'),
  success: require('img/success.png'),
};

export function Icon(props) {
  const { name, size } = props;
  const customeSize = {
    width: normalize(size),
    height: normalize(size),
  };

  return (
    <Image
      source={icons[name]}
      style={[styles.default, size && customeSize]}
      resizeMode="contain"
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
};