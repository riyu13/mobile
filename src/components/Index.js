import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 26, textAlign: 'left'}}>LPK Yukimaga Surakarta</Text>
        <Card style={styles.card}>
            <Text style={{flex:1}}>Login</Text>
            <Button mode="contained" style={styles.button} title='Administrator' onPress={() => this.props.navigation.navigate('Administrator')}>Administrator</Button>
            <Button mode="contained" style={styles.button} title='Kenshusei' onPress={() => this.props.navigation.navigate('Kenshusei')}>Kenshusei</Button>
        </Card>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFFFE0'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#8B4513',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  forgotPasswordButton: {
    marginLeft: 8,
  },
});

export default Index;