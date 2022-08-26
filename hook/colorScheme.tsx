import { Appearance, useColorScheme } from 'react-native';

function MyComponent() {
    let colorScheme = useColorScheme();
  
    if (colorScheme === 'dark') {
      // render some dark thing
    } else {
      // render some light thing
    }
  }