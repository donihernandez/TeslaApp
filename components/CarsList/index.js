import React from 'react'
import { FlatList, SafeAreaView, Dimensions } from 'react-native'

import styles from './styles'
import cars from './cars'
import CarItem from "../CarItem";

const CarsList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                keyExtractor={(item) => item.name}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </SafeAreaView>
    )
}

export default CarsList
