import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface UserProfileProps {
    name: string;
    email: string;
    avatar?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatar }) => {
    return (
        <View style={styles.container}>
            {avatar && (
                <Image
                    source={{ uri: avatar }}
                    style={styles.avatar}
                />
            )}
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        marginVertical: 8,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default UserProfile; 