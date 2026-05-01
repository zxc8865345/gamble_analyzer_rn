import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [step, setStep] = useState(0);
  const [gameData, setGameData] = useState('');
  const [results, setResults] = useState('');

  const steps = [
    { title: '歡迎', content: '歡迎使用百家樂分析平台\n大數據機率分析儀' },
    { title: '輸入數據', content: '請輸入遊戲數據進行分析' },
    { title: '分析結果', content: '正在分析中...' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{steps[step].title}</Text>
        <Text style={styles.text}>{steps[step].content}</Text>
        
        {step === 1 && (
          <TextInput
            style={styles.input}
            placeholder="輸入數據"
            value={gameData}
            onChangeText={setGameData}
          />
        )}
        
        {step === 2 && (
          <Text style={styles.result}>{results || '分析中...'}</Text>
        )}
      </ScrollView>
      
      <View style={styles.buttons}>
        {step > 0 && (
          <TouchableOpacity style={styles.button} onPress={() => setStep(step - 1)}>
            <Text style={styles.buttonText}>上一步</Text>
          </TouchableOpacity>
        )}
        {step < steps.length - 1 && (
          <TouchableOpacity style={styles.button} onPress={() => setStep(step + 1)}>
            <Text style={styles.buttonText}>下一步</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f1e',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 20,
  },
  result: {
    fontSize: 14,
    color: '#4ade80',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
