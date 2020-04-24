import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import {Input, Button} from '../../components';
import {colors} from '../../utils';
import {IconBack, RegisterIllustation} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  const backHandler = () => {
    navigation.goBack();
  };

  const RegisterReducer = useSelector(state => state.RegisterReducer);
  //RegisterReducer bisa didestructuring, menjadi {from} saja. Karena dari ketiga value pada reducer.js, initialStateRegister, yang dipakai hanya form saja.
  const dispatch = useDispatch();

  //   const [form, setForm] = useState({
  //     fullName: '',
  //     email: '',
  //     password: '',
  //   });

  const onInputChange = (value, inputType) => {
    //type di dalam object dispact wajib ada..
    dispatch(setForm(inputType, value));
  };

  const sendData = () => {
    console.log('Kirim data Register..', RegisterReducer.form);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="height"
      keyboardVerticalOffset={Platform.select({ios: 0, android: -100})}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => backHandler()}>
            <IconBack width={15} height={15} style={{alignSelf: 'center'}} />
            <Text style={{alignSelf: 'center'}}>Back</Text>
          </TouchableOpacity>
          <RegisterIllustation
            width={106}
            height={115}
            style={styles.illustration}
          />
          <Text style={styles.text.desc}>
            Mohon Mengisi beberapa data untuk proses daftar anda
          </Text>
          <View style={styles.space(64)} />
          <Input
            placeholder="Nama Lengkap"
            value={RegisterReducer.form.fullName}
            onChangeText={value => onInputChange(value, 'fullName')}
          />
          <View style={styles.space(33)} />
          <Input
            placeholder="Email"
            value={RegisterReducer.form.email}
            onChangeText={value => onInputChange(value, 'email')}
          />
          <View style={styles.space(33)} />
          <Input
            placeholder="Password"
            value={RegisterReducer.form.password}
            secureTextEntry={true}
            onChangeText={value => onInputChange(value, 'password')}
          />
          <View style={styles.space(84)} />
          <Button title="Daftar" onPress={() => sendData()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    padding: 20,
  },
  iconBack: {width: 25, height: 25, backgroundColor: 'blue'},
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

export default Register;
