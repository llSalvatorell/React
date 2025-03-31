import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sobre" />
      <Stack.Screen name="perfil" />
      <Stack.Screen name="pagar" />
      <Stack.Screen name="depositar" />
    </Stack>
  );
}
