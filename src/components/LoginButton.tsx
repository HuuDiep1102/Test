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
        backgroundColor: '#FF6B35', // Different color on main
        padding: 12, // Different padding
        borderRadius: 6, // Different border radius
        alignItems: 'center',
        marginVertical: 8,
    },
    disabled: {
        backgroundColor: '#999999', // Different disabled color
    },
    buttonText: {
        color: 'white',
        fontSize: 14, // Different font size
        fontWeight: '500', // Different font weight
    },
});

export default LoginButton; 