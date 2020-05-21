import React from 'react';
import {View, Text} from 'react-native';
import {IconBack} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && (
        <View style={{flexDirection: 'row'}}>
          <IconBack width={15} height={15} style={{alignSelf: 'center'}} />
          <Text style={{alignSelf: 'center'}}>Back</Text>
        </View>
      )}
      {rest.name === 'forward' && (
        <View style={{flexDirection: 'row'}}>
          <IconBack width={15} height={15} style={{alignSelf: 'center'}} />
          <Text style={{alignSelf: 'center'}}>Forward</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
