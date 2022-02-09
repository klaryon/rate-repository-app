import { Text, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#fff',
  },
});

const AppBarTab = () => {
  return (
    <Pressable>
      <Text style={styles.title}>Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;
