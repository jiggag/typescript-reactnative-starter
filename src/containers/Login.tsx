import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/users';
import { User } from '../types';

export interface Props {
  fetchUser: typeof fetchUser;
  user: User;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Login = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput value="input text" />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
