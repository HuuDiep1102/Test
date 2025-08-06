import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  onMenu?: () => void;
  showBack?: boolean;
  showMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  onBack, 
  onMenu, 
  showBack = false, 
  showMenu = false 
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {showBack && (
          <TouchableOpacity onPress={onBack} style={styles.button}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.rightSection}>
        {showMenu && (
          <TouchableOpacity onPress={onMenu} style={styles.button}>
            <Text style={styles.buttonText}>☰</Text>
          </TouchableOpacity>
        )}
      </View>
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
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    flex: 2,
    textAlign: 'center',
  },
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default Header; 