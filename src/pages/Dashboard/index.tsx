import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAuth} from '../../hooks/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function Dashboard() {
  const {signOut, user} = useAuth();
  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
}
