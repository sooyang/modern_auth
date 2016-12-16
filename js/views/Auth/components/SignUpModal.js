import React, { PropTypes, Component } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {
  Icon,
} from 'shared';
import { Colors, Font, Layout } from '../Theme';
import { SignInModal } from '../components';

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  modalBackground: {
    backgroundColor: 'transparent',
  },
  iconContainer: {
    width: Layout.width.p10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  box: {
    height: Layout.height.p35,
    width: Layout.width.p90,
    backgroundColor: Colors.secondaryColor,
    shadowColor: 'grey',
    shadowOpacity: 0.9,
    shadowRadius: 3,
    shadowOffset: {
      height: 0.8,
      width: 0.8,
    },
    elevation: 1,
  },
  topContainer: {
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingTop: 5,
  },
  formContainer: {
    height: Layout.height.p20,
    padding: 10,
    marginTop: 15,
  },
  mailForm: {
    backgroundColor: Colors.border,
    marginBottom: 5,
  },
  form: {
    marginLeft: 5,
    width: Layout.width.p70,
    height: 50,
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.border,
    height: Layout.height.p08
  },
  font: {
    color: Colors.fontColor,
  },
});


class SignUpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  register() {
    // insert network request
    // { email: this.state.email, password: this.state.password}
  }

  render() {
    const {
      isModalVisible,
      dismiss,
      onSignIn,
    } = this.props;

    return (
      <Modal
        transparent
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => {}}
      >
        <View style={[styles.modalBackground, styles.centerContent, styles.flex]}>
          <View style={styles.box}>
            <View style={styles.topContainer}>
              <TouchableOpacity onPress={dismiss}>
                <Image
                  source={require('img/close.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
              <View style={[styles.mailForm, styles.flex, styles.flexRow]}>
                <View style={styles.iconContainer}>
                  <Icon name='mail' />
                </View>
                <TextInput style={styles.form} placeholder='example@email.com' onChangeText={(email) => this.setState({ email })} />
              </View>
              <View style={[styles.mailForm, styles.flex, styles.flexRow]}>
                <View style={styles.iconContainer}>
                  <Icon name='lock' />
                </View>
                <TextInput style={styles.form} placeholder='******' onChangeText={(password) => this.setState({ password })} secureTextEntry={true} />
              </View>
            </View>
            <View style={[styles.footer, styles.flexRow]}>
              <TouchableOpacity onPress={() => onSignIn()} style={[styles.button, styles.centerContent, styles.flex, styles.flexColumn]} >
                <Text style={styles.font}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.centerContent, styles.flex, styles.flexColumn]} onPress={() => { this.register() }

              }>
                <Text style={styles.font}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

module.exports = SignUpModal;