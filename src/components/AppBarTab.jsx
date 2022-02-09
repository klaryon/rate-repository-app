import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = () => {
  return (
    <Pressable>
      <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
        Repositories
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
