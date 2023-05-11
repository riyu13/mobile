import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Text } from 'react-native-paper';
import { LoginUser, reset } from "../features/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const CardLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigation.navigate('Menu')
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch]);

  const Auth = () => {
    dispatch(LoginUser({ email, password }));
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Administrator</Title>
          {isError && <Text style={{color: 'black', textAlign: 'center'}}>{message}</Text>}
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" style={styles.button} onPress={Auth}>
            {isLoading ? 'Loading.....' : 'Login'}
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    padding: 16,
    backgroundColor: '#FFFFE0'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#000'
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#8B4513',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 5,
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

export default CardLogin;