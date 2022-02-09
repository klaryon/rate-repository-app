import Main from './src/components/Main';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  return <Main />;
};

export default App;
