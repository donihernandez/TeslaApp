import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles  from './styles'

const StyledButton = ({ type, content, onPress }) => {
    const backgroundColor = type === 'primary' ? '#333' : 'white'
    const textColor = type === 'primary' ? 'white' : '#333'

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]}
                       onPress={ () => {
                           console.warn('Hey there')
                       }}
            >
                <Text style={[styles.text, {color: textColor}]}>{ content }</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
