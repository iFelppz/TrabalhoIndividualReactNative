import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/Routes';
import { useFonts, RubikMonoOne_400Regular } from '@expo-google-fonts/rubik-mono-one';

export default function App() {


  
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}

