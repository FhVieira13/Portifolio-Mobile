import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Header } from '../components/Header';

const skills = [
  { id: '1', name: 'React Native', level: 4 },
  { id: '2', name: 'Game Dev', level: 6 },
  { id: '3', name: 'Back-end', level: 5 },
  { id: '4', name: 'Front-end', level: 5 },
];

const SkillItem = ({ name, level }) => (
  <View style={styles.skillRow}>
    <Text style={styles.skillName}>{name}:</Text>
    <View style={styles.stars}>
      {[...Array(6)].map((_, i) => (
        <Text key={i} style={{ color: i < level ? '#EAB308' : '#333', fontSize: 20 }}>
          ★
        </Text>
      ))}
    </View>
  </View>
);

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      <Header name="Minhas Habilidades" />
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillItem name={item.name} level={item.level} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  skillName: { color: '#fff', fontSize: 18, fontWeight: '500' },
  stars: { flexDirection: 'row' },
});