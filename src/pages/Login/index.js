import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';

import {LoginIllustration} from '../../assets';
import {colors} from '../../utils';
import {Input, Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../../redux';

const Login = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  const LoginReducer = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  const onInputChange = (value, inputType) => {
    dispatch(setLogin(inputType, value));
  };

  const sendData = () => {
    console.log('Data Log In', LoginReducer.login);
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="height"
      keyboardVerticalOffset={Platform.select({ios: 0, android: -100})}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <Button type="icon" name="back" onPress={() => handleBack()} />
            <Button type="icon" name="forward" onPress={() => handleBack()} />
          </View>
          <LoginIllustration
            width={106}
            height={115}
            style={styles.illustration}
          />
          <Text style={styles.text.desc}>
            Silahkan log in jika sudah memiliki akun O - JOL{' '}
          </Text>
          <View style={styles.space(64)} />
          <Input
            placeholder="email"
            value={LoginReducer.login.email}
            onChangeText={value => onInputChange(value, 'email')}
          />
          <View style={styles.space(33)} />
          <Input
            placeholder="password"
            value={LoginReducer.login.password}
            secureTextEntry={true}
            onChangeText={value => onInputChange(value, 'password')}
          />
          <View style={styles.space(33)} />
          <Button title="Log In" onPress={() => sendData()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = {
  wrapper: {
    flex: 1,
    padding: 20,
  },
  iconBack: {width: 25, height: 25},
  illustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};
