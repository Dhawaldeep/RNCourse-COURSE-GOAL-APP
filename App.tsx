import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState<{ text: string, id: string }[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    console.log(enteredGoalText);
    setGoals((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  function deleteGoalHandler(id: string) {
    setGoals(currentGoals => currentGoals.filter(curGoal => curGoal.id !== id));
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <GoalInput addGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={goals} keyExtractor={({ id }) => id} renderItem={(itemInfo) => {
            return <GoalItem onDeleteItem={deleteGoalHandler} id={itemInfo.item.id} text={itemInfo.item.text} />
          }} alwaysBounceVertical={true} />
          {/* {goals.map((goal, i) => <View style={styles.goalItem} key={i}><Text style={styles.goalText}>{goal}</Text></View>)} */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
