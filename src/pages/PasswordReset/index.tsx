import { View, Image, Text, TouchableOpacity } from 'react-native';
import CustomButton from '@/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { c2e_focus_icon } from 'public/assets/images/icons/navigation';
import { TitleView, ResetView, Title, Description } from './index.styled';
import { LoginScreenNavigationProp } from '@/types/navigation';
import React, { useState } from 'react';

const PasswordReset = () => {
  const [authState, setAuthState] = useState(true);

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleContinueBtn = () => {
    navigation.navigate('Password', { type: 'reset' });
  };

  return (
    <>
      {authState ? (
        <ResetView>
          <View>
            <Image source={c2e_focus_icon} style={{ marginBottom: 20 }} />
            <TitleView>
              <Title>안전한 서비스 이용을 위해</Title>
              <Title>본인 인증이 필요해요</Title>
            </TitleView>
            <View>
              <Description>연계된 이메일 계정을 통해</Description>
              <Description>새로운 비밀번호를 등록합니다.</Description>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <CustomButton
              text="계속하기"
              fontWeight={800}
              onPress={handleContinueBtn}
              gradientColors={['#1BE0CD', '#47C8FC']}
            />
          </View>
        </ResetView>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Title>구글 계정 인증 후</Title>
            <Title>인증 완료 버튼을 눌러주세요</Title>
          </View>
          <TouchableOpacity style={{ marginTop: 20 }}>
            <Description>다시 인증하기</Description>
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
              position: 'absolute',
              bottom: 40,
            }}>
            <CustomButton
              text="인증 완료"
              fontWeight={800}
              gradientColors={['#1BE0CD', '#47C8FC']}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default PasswordReset;
