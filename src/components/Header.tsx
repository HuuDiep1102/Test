import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps {
    title: string;
    onBack?: () => void;
    onMenu?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, onMenu }) => {
    return (
        <View style={styles.header}>
            {onBack && (
                <TouchableOpacity style={styles.button} onPress={onBack}>
                    <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>
            )}

            <Text style={styles.title}>{title}</Text>

            {onMenu && (
                <TouchableOpacity style={styles.button} onPress={onMenu}>
                    <Text style={styles.buttonText}>☰</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'center',
    },
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#007AFF',
    },
});

export default Header; 