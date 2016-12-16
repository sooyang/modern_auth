import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors, Font, Layout } from './Theme';
import { SignUpModal, SignInModal } from './components';
import { Logo } from 'shared';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  smallFont: {
    fontSize: Font.small,
  },
  primaryBackgroundColor: {
    backgroundColor: Colors.primaryColor,
  },
  secondaryBackgroundColor: {
    backgroundColor: Colors.secondaryColor,
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonSize: {
    height: Layout.height.p08,
    width: Layout.width.half,
  },
  signInButton: {
    marginBottom: 30,
    borderRadius: 4,
  },
  signInButtonText: {
    color: Colors.secondaryColor,
  },
  signUpButton: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 4,

  },
  signUpButtonText: {
    color: Colors.primaryColor,
  },
  footerContainer: {
    height: Layout.height.p08,
  },
  footerText: {
    color: Colors.footerColor,
  },
  buttonShadow: {
    shadowColor: Colors.shadowColor,
    shadowOpacity: 0.9,
    shadowRadius: 3,
    shadowOffset: {
      height: 0.8,
      width: 0.8,
    },
    elevation: 1,
  },
});

class ModernHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpModalVisible: false,
      signInModalVisible: false,
    };
  }

  presentButtons() {
    if (this.state.signInModalVisible === false && this.state.signUpModalVisible === false) {
      return (
          <View style={[styles.flex, styles.bottomContainer]}>
            <TouchableOpacity onPress={() => this.setState({signInModalVisible: true, signUpModalVisible: false})} style={[styles.primaryBackgroundColor ,styles.signInButton, styles.centerItems, styles.buttonSize, styles.buttonShadow]}>
              <Text style={[styles.smallFont, styles.signInButtonText]}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({signUpModalVisible: true, signInModalVisible: false})} style={[styles.signUpButton, styles.centerItems, styles.buttonSize, styles.buttonShadow]}>
              <Text style={[styles.smallFont, styles.signUpButtonText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      );
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        <View style={[styles.flex, styles.primaryBackgroundColor]}>
          <Logo
            resizedHeight={this.state.bodyHeight * 0.5}
          />
        </View>
        <View style={[styles.flex, styles.secondaryBackgroundColor]}>
          {this.presentButtons()}
          <View style={[styles.footerContainer, styles.centerItems]}>
            <Text style={[styles.smallFont, styles.footerText]}>
              Version
            </Text>
          </View>
        </View>
        <SignUpModal
          isModalVisible={this.state.signUpModalVisible}
          onSignIn={() => this.setState({ signUpModalVisible: false, signInModalVisible: true })}
          dismiss={() => this.setState({ signUpModalVisible: false })}
        />
        <SignInModal
          isModalVisible={this.state.signInModalVisible}
          onSignUp={() => this.setState({ signUpModalVisible: true, signInModalVisible: false })}
          dismiss={() => this.setState({ signInModalVisible: false })}
        />
      </View>
    );
  }
}

ModernHome.propTypes = {
  navigator: PropTypes.object,
};

module.exports = ModernHome;