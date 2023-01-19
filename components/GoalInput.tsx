import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props: { addGoal: (enteredGoalText: string) => void }) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }

    function openGoalInputModal() {
        setModalVisible(true);
    }

    function addGoalHandler() {
        props.addGoal(enteredGoalText);
        setEnteredGoalText("");
        setModalVisible(false);
    }

    function cancelGoalHandler() {
        setEnteredGoalText("");
        setModalVisible(false);
    }

    console.log("Goal Input");

    return (
        <>
            <Button title="Add Course Goal" color="#5e0acc" onPress={openGoalInputModal} />
            <Modal visible={modalVisible} animationType='slide'>
                <View style={styles.inputContainer}>
                    <Image style={styles.image} source={require("../assets/images/goal.png")} />
                    <TextInput style={styles.textInput} placeholder='Your course goal' value={enteredGoalText} onChangeText={goalInputHandler} />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button title='Cancel' color="#f31282" onPress={cancelGoalHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Add goal' color="#5e0acc" onPress={addGoalHandler} />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: '#120438',
        width: '100%',
        padding: 16,
        borderRadius: 6
    },
    buttonsContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});
