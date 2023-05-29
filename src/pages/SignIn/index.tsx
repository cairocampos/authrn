import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useAuth} from '../../hooks/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

export function SignIn() {
  const {signIn} = useAuth();

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
}
