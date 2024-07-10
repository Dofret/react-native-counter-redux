import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { arttır, azalt, yenile } from '../redux/Slice';

const Sayac = () => {
    const counter = useSelector((state) => state.Sayac);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{ fontSize: 40 }}>{counter.count}</Text>
                <Button text="arttır" onPress={() => dispatch(arttır())} />
                <Button text="azalt" onPress={() => dispatch(azalt())} />
                <Button text="sıfırla" onPress={() => dispatch(yenile())} />
            </View>
        </View>
    );
};

export default Sayac;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 200,
        width: 200,
        backgroundColor: "#eaeaea",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
});
