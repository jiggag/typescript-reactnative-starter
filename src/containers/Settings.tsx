import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  page: boolean;
}
export default class Settings extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
        <Text>{navigation.getParam('description', 'default value')}</Text>
        <Button
          onPress={() => navigation.navigate('Page', {
            description: 'navigate => 페이지 이동 (이미 스택에 있는 경우 이동 안함)',
          })}
          title="navigate('Page'): route이동(이미 있는 스택인 경우 이동 안됨)"
        />
        <Button onPress={() => navigation.push('Page', {
          description: 'push => 해당 페이지로 스택 쌓아 이동',
        })} title="push('Page'): 스택쌓으면서 route이동" />
        <Button onPress={() => navigation.pop(1)} title="pop(n): n스택빼기" />
        <Button onPress={() => navigation.goBack()} title="goBack() => 1스택빼기" />
        <Button onPress={() => navigation.popToTop()} title="popToTop() => 스택 초기화, 맨 처음 페이지로 이동" />
        <Button onPress={() => navigation.replace('App')} title="replace('App'): 현재 스택에 화면만 대체" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
