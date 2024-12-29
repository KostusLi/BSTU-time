import { Slot } from 'expo-router';
import { ThemeProvider } from './src/context/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}

