import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LoginButtonProps {
    onPress: () => void;
    title: string;
    disabled?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress, title, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50', // New green color
        padding: 16, // Increased padding
        borderRadius: 10, // Increased border radius
        alignItems: 'center',
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    disabled: {
        backgroundColor: '#BDBDBD', // New disabled color
        shadowOpacity: 0,
        elevation: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 16, // Increased font size
        fontWeight: '600', // Increased font weight
        textTransform: 'uppercase',
    },
});

export default LoginButton; 