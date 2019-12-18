import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/users';
import { User } from '../types';

export interface Props {
  fetchUser: typeof fetchUser;
  user: User;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Live = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>live tab</Text>
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
)(Live);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
