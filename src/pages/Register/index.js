import React from 'react';
import { View, Text } from 'react-native';

import { Input } from '../../components';
import { colors } from '../../utils';
import { IconBack, LeftIconArrow, RegisterIllustation } from '../../assets';

const Register = () => {
    return(
        <View style={styles.wrapper}>
            <IconBack width={25} height={25} />
            <RegisterIllustation 
                width={106} 
                height={115} 
                style={styles.illustration}
            />
            <Text style={styles.text.desc}> 
                Mohon Mengisi beberapa data untuk proses daftar anda
            </Text>
            <View style={styles.space(64)} />
            <Input placeholder="Nama Lengkap"/>
            <View style={styles.space(33)} />
            <Input placeholder="Email"/>
            <View style={styles.space(33)} />
            <Input placeholder="Password"/>
        </View>
    );
};

const styles= {
    wrapper: {
        padding: 20
    },
    iconBack: {width: 25, height: 25, backgroundColor: 'blue'},
    illustration: {
        marginTop: 8
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
    space: (value) => {
        return {
            height: value
        };
    },
};

export default Register;