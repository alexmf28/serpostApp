import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, 
} from 'react-native';

const Section = ({ title, options }) => {
  return(
    <View style={styles.container}> 
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={option.onPress}>
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
  },
  container: {
    margin: 25
  }
});
