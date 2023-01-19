import { Pressable, StyleSheet, Text, View } from "react-native"

export default function GoalItem(props: { text: string, id: string; onDeleteItem: (id: string) => void }) {
    function pressHandler() {
        props.onDeleteItem(props.id);
    }

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#210644' }} onPress={pressHandler} style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8
    },
});
